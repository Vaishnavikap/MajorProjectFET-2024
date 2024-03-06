
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { PaymentRoutingModule } from './payment-routing.module';



@NgModule({
  declarations: [
    PaymentComponent
    
 
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  exports:[
    PaymentComponent
  ]
})
export class PaymentModule { }