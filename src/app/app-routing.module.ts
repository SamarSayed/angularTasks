import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsListingComponent } from './products/products-listing/products-listing.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes :Routes = [
    {path : "" , component:ProductsListingComponent},
    {path:"home",redirectTo:"",pathMatch:"full"},
    {path : "login" , component: LoginComponent},
    {path : "signup" , component : SignUpComponent},
    {path :"product/listing" , component : ProductsListingComponent},
    { path: "product/add", component: AddProductComponent },
    { path: "product/edit/:id", component: AddProductComponent },
    { path: "product/details/:id", component: ProductsDetailsComponent },
    {path : "**" , component:ProductsListingComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutersModule{

}