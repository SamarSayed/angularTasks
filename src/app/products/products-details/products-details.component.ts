import { Product } from 'src/app/_model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from 'src/app/_services/productServices.services';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
product:Product;
relatedProducts:Product[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServices
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.productService.getProductById(params.id).subscribe(
          (response)=>{
            this.product=response
          },
          (err)=>{
            console.log(err)
          },
          ()=>{}
        )
      },
      (error) => {
        console.log(error)
      },
      () => { }
    )

    this.productService.getAllProducts().subscribe(
     (response) => {
       this.relatedProducts = response['product'].slice(2,6)
       //console.log(this.relatedProducts)
     },
     (err) => {
       console.log(err)
     },
     () => { }
   )
  }

}
