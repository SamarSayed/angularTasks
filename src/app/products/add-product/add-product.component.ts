import { CategoryServices } from './../../_services/categoryServices.services';
import { PaymentServices } from './../../_services/paymentServices.services';
import { PaymentType } from './../../_model/payment-type';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from 'src/app/_services/productServices.services';
import { Category } from 'src/app/_model/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  paymentTypes: PaymentType[]=[];
  categories: Category[]=[];
  status: string = "NotOnSale";
  product: Product = { data: [{}], tags: [], paymentTypes: [], imagesUrls: [],category:{}};
  editMood: boolean = false;
  constructor(
    private paymentservices: PaymentServices,
    private categoryServices: CategoryServices,
    private activatedRoute: ActivatedRoute,
    private productService: ProductServices,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.paymentTypes = this.paymentservices.getAllPaymentTypes();
    this.categoryServices.getAllCategories().subscribe(
      (response)=>{
        //console.log(response)
        let res = response as Category[]
        this.categories=res
      },
      (err) => {

       },
      () => { },
    )
    this.editMood = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === "edit"

    if (this.editMood) {
      let id = this.activatedRoute.snapshot.params.id
      this.productService.getProductById(id).subscribe(
        (response) => {
          this.product = response
          if (this.product.discount) {
            this.status = "OnSale"
          }
          //console.log(this.product)
        },
        (err) => {
          console.log(err)
        },
        () => { }
      )
    }
  }


  addProduct(form) {
    for (let index = 0; index < this.paymentTypes.length; index++) {
      if (form.value["type_" + index]) {
        this.product.paymentTypes.push(this.paymentTypes[index])
      }
    }
    if (!this.editMood) {
      this.productService.addProduct(this.product).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(["/product","listing"])
        },
        (err) => {
          console.log(err);
        },
        () => { },
      )
    }
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
