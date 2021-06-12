import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:5000/products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(Product){
        return axios.post(PRODUCT_API_BASE_URL+'/add', Product);
    }

    getProductById(ProductId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + ProductId);
    }

    updateProduct(Product, ProductId){
        return axios.put(PRODUCT_API_BASE_URL + '/update/' + ProductId, Product);
    }

    deleteProduct(ProductId){
        return axios.delete(PRODUCT_API_BASE_URL + '/delete/' + ProductId);
    }
}

export default new ProductService()