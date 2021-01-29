import { ProductServices } from './../_services/productServices.services';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../_model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//  @Input() itemArr:Product [];
//   @Input() totalPrice:number;

itemArr: Product[] = [];
totalPrice: number = 0;

constructor(private ProductServices : ProductServices) { }

ngOnInit(): void {
this.ProductServices.itemAddedToCart.subscribe(
  (res)=>{
    this.itemArr.push(res)
    if (res.discount) {
      // console.log(res.discount)
      this.totalPrice += res.price - res.discount
    } else {
      // console.log(res.discount)
      this.totalPrice += res.price
    }
    // console.log(this.totalPrice)
  },
  (err)=>{
    console.log(err)
  },
  (compelete)=>{
    console.log(compelete)
  }
)
}
}
