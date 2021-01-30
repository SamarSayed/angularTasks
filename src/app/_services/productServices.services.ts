import { EventEmitter, Injectable } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductServices {
    private products: Product[]=[]
    itemAddedToCart = new EventEmitter<Product>();
    baseUrl = "https://mearn-stack-backend-test.herokuapp.com/"
    
    constructor(private httpClint: HttpClient) { }


    getAllProducts() {
       return this.httpClint.get(`${this.baseUrl}product`)
    }
    getProductById(_id: string) {
        return this.httpClint.get(`${this.baseUrl}product/${_id}`)
    }
    addProduct(product: Product) {
        const token = localStorage.getItem("token")
        const headers = new HttpHeaders({
            authorization:token
        })
        console.log(product)
        let newProduct = {
            discount: product.discount,
            price: product.price,
            data:product.data,
            imagesUrls:product.imagesUrls,
            categoryId:product.category.id
        }
       return this.httpClint.post(`${this.baseUrl}product/add`, newProduct, {headers})
    }

    // updateProduct(product: Product) {
    //     const index = this.products.findIndex(p => p._id === product._id)
    //     const { _id, data, price, discount, imagesUrls, paymentTypes, category, tags } = product
    //     this.products[index] = { _id, data, price, discount, imagesUrls, paymentTypes, category, tags }
    // }
    // deleteProduct(_id: string) {
    //     const index = this.products.findIndex(p => p._id === _id)
    //     this.products.splice(index, 1)
    // }
}