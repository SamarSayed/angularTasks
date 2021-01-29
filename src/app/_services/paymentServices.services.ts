import { PaymentType } from './../_model/payment-type';
export class PaymentServices{
   private PaymentTypes : PaymentType[]=[
        {id: 1, name: "Direct BankTransfare"},
        { id: 2, name: "Cheque Payment" },
        { id: 3, name: "Paypal" },
        { id: 4, name: "Visa" },
        { id: 5, name: "Mastercard" },
        { id: 6, name: "On Dilivery" },
    ]
    getAllPaymentTypes(){
        return this.PaymentTypes;
    }
}