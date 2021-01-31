import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsListingComponent } from './products/products-listing/products-listing.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes :Routes = [
    {path : "" , component:HomeComponent},
    {path:"home",redirectTo:"",pathMatch:"full"},
    {path : "login" , component: LoginComponent},
    {path : "signup" , component : SignUpComponent},
    { path: "product", loadChildren:"./products/product.module#ProductModule"},
    {path : "**" , component:HomeComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration:"top"})],
    exports:[RouterModule]
})

export class AppRoutersModule{

}