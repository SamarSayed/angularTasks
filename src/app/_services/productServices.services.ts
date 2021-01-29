import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/_model/product';
export class ProductServices {
    private products: Product[] = [
        {
            id: 1,
            data: [{ id: 1, name: "x1", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            // discount:10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 2,
            data: [{ id: 1, name: "x2", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 3000,
            discount: 210,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 3,
            data: [{ id: 1, name: "x3", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 500,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 4,
            data: [{ id: 1, name: "x4", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 3050,
            discount: 100,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 5,
            data: [{ id: 1, name: "x5", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            // discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 6,
            data: [{ id: 1, name: "x6", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 7,
            data: [{ id: 1, name: "x7", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 8,
            data: [{ id: 1, name: "x8", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            // discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 9,
            data: [{ id: 1, name: "x9", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 10,
            data: [{ id: 1, name: "x10", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 11,
            data: [{ id: 1, name: "x11", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 12,
            data: [{ id: 1, name: "x12", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            // discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        },
        {
            id: 13,
            data: [{ id: 1, name: "x13", discreption: "anything", lang: { id: 1, name: "EN" } }],
            price: 200,
            discount: 10,
            imgsUrl: ["../assets/img/placeholder.png"]
        }
    ]
    itemAddedToCart = new EventEmitter<Product>();

    getAllProducts(): Product[] {
        return this.products;
    }
    getProductById(id: number): Product {
        return this.products.find(p => p.id === id)
    }
    addProduct(product: Product) {
        const id = this.products.length
        const { data, price, discount, imgsUrl, paymentTypes, category, tags } = product
        const newproduct: Product = { id, data, price, discount, imgsUrl, paymentTypes, category, tags }
        this.products.push(newproduct)
    }
    updateProduct(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id)
        const {id, data, price, discount, imgsUrl, paymentTypes, category, tags } = product
        this.products[index] = {id, data, price, discount, imgsUrl, paymentTypes, category, tags }
    }
    deleteProduct(id:number){
        const index = this.products.findIndex(p => p.id === id)
        this.products.splice(index,1)
    }
    productSearch(searchInput){
       let result = this.products.filter(p => p.data[0].name.toLowerCase().includes(searchInput.toLowerCase()))
       return result
    }
}