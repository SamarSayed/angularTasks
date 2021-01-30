import { CategoryServices } from './_services/categoryServices.services';
import { AppRoutersModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import { ProductsListingComponent } from './products/products-listing/products-listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductServices } from './_services/productServices.services';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule} from '@angular/forms';
import { PaymentServices } from './_services/paymentServices.services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { StringPipePipe } from './pipes/string-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsItemComponent,
    ProductsListingComponent,
    HeaderComponent,
    FooterComponent,
    DropDownComponent,
    LoginComponent,
    SignUpComponent,
    AddProductComponent,
    ProductsDetailsComponent,
    StringPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutersModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    ProductServices, 
    PaymentServices,
    CategoryServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
