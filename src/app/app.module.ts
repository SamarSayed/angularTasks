import { ProductModule } from './products/product.module';
import { CategoryServices } from './_services/categoryServices.services';
import { AppRoutersModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductServices } from './_services/productServices.services';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule} from '@angular/forms';
import { PaymentServices } from './_services/paymentServices.services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/drop-down/shared.module';
import { InterceptorServicesService } from './_services/interceptor-services.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutersModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule
    // ProductModule
  ],
  providers: [
    ProductServices, 
    PaymentServices,
    CategoryServices,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorServicesService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
