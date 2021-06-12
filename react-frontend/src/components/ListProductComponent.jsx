import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({Products: this.state.Products.filter(Product => Product._id !== id)});
        });
    }
    viewProduct(id){
        this.props.history.push(`/view-Product/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/add-Product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ Products: res.data});
        })
    }

    addProduct(){
        this.props.history.push('/add-Product/_add');
    }
    handleTextSearch = (e) => {
        const searchTerm = e.currentTarget.value;
        ProductService.getProducts().then((res) => {
            this.setState({ Products: res.data})})
        .then((res) => {
            this.setState({Products : this.state.Products.filter((ee)=>ee.Nom.toLowerCase().includes(searchTerm.toLowerCase()))})
        });
      };
    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <section className='search' >
            <form >
            <input
              className="form-control"
              type="search"
              placeholder="Search product"
              name="searchTerm"
              onChange={this.handleTextSearch}
              style={{marginLeft:"40%",width:"20%",marginBottom:"30px", "border-radius":"20px",backgroundColor:"white"}}
            />
                        </form>
        </section>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom</th>
                                    <th> PrixUnitaire </th>
                                    <th> Quantité</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Products.map(
                                        Product => 
                                        <tr key = {Product.id}>
                                             <td> { Product.Nom} </td>   
                                             <td> {Product.PrixUnitaire}</td>
                                             <td> {Product.Quantité}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(Product._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(Product._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(Product._id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductComponent
