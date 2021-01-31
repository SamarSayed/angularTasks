import { ProductServices } from './../../_services/productServices.services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { faTrash , faEye , faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() product:Product;
  //@Output() itemAdded= new EventEmitter<Product>()
  remove=faTrash;
  edit=faEdit;
  eye= faEye;
  constructor(private ProductServices:ProductServices , private authService :AuthService) {  }
    buttonsView:boolean
  ngOnInit(): void {
    this.buttonsView = this.authService.isAuthenticated()
  }
 getPrice():number{
   return this.product.discount ? this.product.price-this.product.discount : this.product.price
 }
 addItem(){
   //console.log(this.product)
   //this.itemAdded.emit(this.product);
   this.ProductServices.itemAddedToCart.emit(this.product)
 }
}
