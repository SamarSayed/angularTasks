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
  products:Product[]=[]
  pagesNumber:number[]=[];
  pageSize:number = 9;
  currentPage :number = 0;
  plus = faPlus ;
  searchIcon = faSearch;
  productsLength:number;
  constructor(private ProductServices: ProductServices) { 
  }

  ngOnInit(): void {
    this.ProductServices.getAllProducts().subscribe(
      (response) => {
        this.products = response['product']
        this.productsLength = response['numberOfProducts']
        this.calcPagesNum(this.productsLength)
      },
      (err) => {
        console.log(err)
      },
      () => { }
    );
  }

  calcPagesNum(productsLength){
    this.pagesNumber=[]
    for (let index = 0; index < productsLength / this.pageSize; index++) {
      this.pagesNumber.push(index + 1)
    }
  }

  searchHandler(searchInput){
    this.ProductServices.getAllProducts().subscribe(
      (response) => {
        this.products = response["product"].filter(p => p.data[0].name.toLowerCase().includes(searchInput.value.toLowerCase()))
        this.calcPagesNum(this.productsLength)
      },
      (err) => {
        console.log(err)
      },
      () => { }
    )
    // console.log(this.products)
  }


// itemAdded(prod){
//   // console.log(prod)
//   this.addToCart.emit(prod);
// }
}
