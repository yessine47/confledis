import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({Product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Nom: </label>
                            <div> { this.state.Product.Nom }</div>
                        </div>
                        <div className = "row">
                            <label> prix unitaire: </label>
                            <div> { this.state.Product.PrixUnitaire }</div>
                        </div>
                        <div className = "row">
                            <label> quantité: </label>
                            <div> { this.state.Product.Quantité }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent
