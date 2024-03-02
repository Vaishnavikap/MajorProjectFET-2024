import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

declare const Razorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})


export class PaymentComponent {
  constructor(private http: HttpClient) {}

  makePayment(amount: number) {
    this.http.post(`${environment.backendUrl}/create-order`, { amount }).subscribe({
      next: (order: any) => {
        const options = {
          key: environment.razorpayKeyId, // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR.
          currency: "INR",
          name: "SpotifyTune Subscribtion",
          description: "Test Transaction",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fflower-logo.html&psig=AOvVaw1GwFh_NkjsIQEzVQr1mKK3&ust=1709285679624000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC1lsCf0IQDFQAAAAAdAAAAABAJ",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response: any){
              alert("Payment Done");
              
          },
          prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9307864263",
          
            
          },
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              color: "#F37254"
          }
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
      },
      error: (error) => console.error(error)
    });
  }
}//configuring the ayment details here where 