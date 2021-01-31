import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsItemComponent } from "./products-item/products-item.component";
import { ProductsListingComponent } from "./products-listing/products-listing.component";
import { StringPipePipe } from '../pipes/string-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductServices } from '../_services/productServices.services';
import { CategoryServices } from '../_services/categoryServices.services';
import { PaymentServices } from '../_services/paymentServices.services';
import { AuthGuardService } from '../_services/auth-guard.service';

@NgModule({
    declarations: [
        ProductsItemComponent,
        ProductsListingComponent,
        AddProductComponent,
        ProductsDetailsComponent,
        StringPipePipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule.forChild([
            {path:"",children:[
                { path: "listing", component: ProductsListingComponent },
                { path: "add", component: AddProductComponent,canActivate:[AuthGuardService] },
                { path: "edit/:id", component: AddProductComponent, canActivate: [AuthGuardService] },
                { path: "details/:id", component: ProductsDetailsComponent },
            ]}
        ])
    ],
    providers: [],
    exports: []
})

export class ProductModule {

}