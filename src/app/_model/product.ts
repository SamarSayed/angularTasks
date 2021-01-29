import { Tag } from './tag';
import { PaymentType } from './payment-type';
import { ProductLang } from './product-lang';
export interface Product{
    id?:number;
    data?:ProductLang [];
    price?:number;
    discount?:number;
    imgsUrl?:string[];
    paymentTypes?:PaymentType[];
    category?:string;
    tags?:Tag[];
}