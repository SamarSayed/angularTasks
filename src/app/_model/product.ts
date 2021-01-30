import { Tag } from './tag';
import { PaymentType } from './payment-type';
import { ProductLang } from './product-lang';
import { Category } from './category';
export interface Product{
    _id?:string;
    data?:ProductLang [];
    price?:number;
    discount?:number;
    imagesUrls?:string[];
    paymentTypes?:PaymentType[];
    category?:Category;
    tags?:Tag[];
}