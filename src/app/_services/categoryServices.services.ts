import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../_model/category";

@Injectable()
export class CategoryServices {
    baseUrl = "https://mearn-stack-backend-test.herokuapp.com/"
    constructor(
        private httpclient:HttpClient
    ){}
    getAllCategories() {
       return this.httpclient.get(`${this.baseUrl}category`)
        //return this.categories;
    }
}