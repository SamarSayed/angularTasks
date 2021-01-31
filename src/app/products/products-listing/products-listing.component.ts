import { CategoryServices } from './../../_services/categoryServices.services';
import { ProductServices } from './../../_services/productServices.services';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/_model/category';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  @Output() addToCart= new EventEmitter<Product>()
  products:Product[]=[];
  productsClone: Product[] = []
  pagesNumber:number[]=[];
  pageSize:number = 9;
  currentPage :number = 0;
  plus = faPlus ;
  searchIcon = faSearch;
  productsLength:number;
  categories:Category[];
  sortOption:string="1";
  buttonsView:boolean;
  constructor(private ProductServices: ProductServices , private categoryService : CategoryServices,
   private authService:AuthService) { 
  }

  ngOnInit(): void {
    this.buttonsView = this.authService.isAuthenticated()
    this.ProductServices.getAllProducts().subscribe(
      (response) => {
        this.products = response['product']
        this.productsClone = this.products.slice()
        this.sortProducts()
        this.productsLength = response['numberOfProducts']
        this.calcPagesNum(this.productsLength)
      },
      (err) => {
        console.log(err)
      },
      () => { }
    );
    this.categoryService.getAllCategories().subscribe(
      (response)=>{
          this.categories = response as Category[]
        // console.log(this.categories)
      },
      (err) => {
        console.log(err)
       },
      () => { },
    )
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
        this.calcPagesNum(this.products.length)
      },
      (err) => {
        console.log(err)
      },
      () => { }
    )
    // console.log(this.products)
  }

  getProductsByCategory(categoryId){
    this.ProductServices.getAllProducts().subscribe(
      (response) => {
        this.products = response["product"].filter(p => p.categoryId === categoryId)
        this.calcPagesNum(this.products.length)
      },
      (err) => {
        console.log(err)
      },
      () => { }
    )
    
  }
  sortProducts(){
    this.products = this.products.sort(
      (a, b) => {
        if (this.sortOption == "1") {
          if (a.discount>b.discount) {
            return -1
          } else {
            return 1
          }
        }
        else if (this.sortOption == "2") {
          if (a.price < b.price) {
            return -1
          } else {
            return 1
          }
        }
       else if (this.sortOption == "3") {
          if (a.price < b.price) {
            return 1
          } else {
            return -1
          }
        }
        else if (this.sortOption == "4") {
          if (a.data[0].name.toLocaleLowerCase() < b.data[0].name.toLocaleLowerCase()) {
            return -1
          } else {
            return 1
          }
        }
      }
    )
  }

// itemAdded(prod){
//   // console.log(prod)
//   this.addToCart.emit(prod);
// }
}
