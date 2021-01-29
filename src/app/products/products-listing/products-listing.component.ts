import { ProductServices } from './../../_services/productServices.services';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  @Output() addToCart= new EventEmitter<Product>()
  products:Product[]
  pagesNumber:number[]=[];
  pageSize:number = 9;
  currentPage :number = 0;
  plus = faPlus ;
  searchIcon = faSearch;
  constructor(private ProductServices: ProductServices) { 
  }

  ngOnInit(): void {
    this.products = this.ProductServices.getAllProducts();
    this.calcPagesNum()
  }

  calcPagesNum(){
    this.pagesNumber=[]
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.pagesNumber.push(index + 1)
    }
  }

  searchHandler(searchInput){
    //console.log(searchInput.value)
    this.products = this.ProductServices.productSearch(searchInput.value)
    this.calcPagesNum()
  }


// itemAdded(prod){
//   // console.log(prod)
//   this.addToCart.emit(prod);
// }
}
