import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Nom: '',
            PrixUnitaire: '',
            Quantité: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrixUnitaireHandler = this.changePrixUnitaireHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let Product = res.data;
            this.setState({Nom: Product.Nom,
                PrixUnitaire: Product.PrixUnitaire,
                Quantité : Product.Quantité
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let Product = {Nom: this.state.Nom, PrixUnitaire: this.state.PrixUnitaire, Quantité: this.state.Quantité};
        console.log('Product => ' + JSON.stringify(Product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(Product, this.state.id).then( res => {
            this.props.history.push('/Products');
        });
    }
    
    changeNomHandler= (event) => {
        this.setState({Nom: event.target.value});
    }

    changePrixUnitaireHandler= (event) => {
        this.setState({PrixUnitaire: event.target.value});
    }

    changeQuantitéHandler= (event) => {
        this.setState({Quantité: event.target.value});
    }

    cancel(){
        this.props.history.push('/Products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Nom" name="Nom" className="form-control" 
                                                value={this.state.Nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prix Unitaire: </label>
                                            <input placeholder="PrixUnitaire" name="PrixUnitaire" className="form-control" 
                                                value={this.state.PrixUnitaire} onChange={this.changePrixUnitaireHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantité: </label>
                                            <input placeholder="Quantité" name="Quantité" className="form-control" 
                                                value={this.state.Quantité} onChange={this.changeQuantitéHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent
