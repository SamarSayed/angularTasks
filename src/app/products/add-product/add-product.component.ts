import { CategoryServices } from './../../_services/categoryServices.services';
import { PaymentServices } from './../../_services/paymentServices.services';
import { PaymentType } from './../../_model/payment-type';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  paymentTypes: PaymentType[];
  categories: string[];
  status: string = "NotOnSale";
  product: Product = { data: [{}], tags: [] , paymentTypes:[] }
  constructor(private paymentservices: PaymentServices, private categoryServices: CategoryServices) { }

  ngOnInit(): void {
    this.paymentTypes = this.paymentservices.getAllPaymentTypes();
    this.categories = this.categoryServices.getAllCategories();
  }
  addProduct(form) {
    console.log(form.value)
    for (let index = 0; index < this.paymentTypes.length; index++) {
      if (form.value["type_"+index]) {
        this.product.paymentTypes.push(this.paymentTypes[index])
      }
    }
    console.log(this.product)
  }
  addTag(tagInput) {
    let tag = { id: this.product.tags.length, name: tagInput.value }
    this.product.tags.push(tag)
    tagInput.value = ""
  }
  deleteTag(index) {
    this.product.tags.splice(index, 1)
  }
}
