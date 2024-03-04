import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';


declare const Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private http: HttpClient) {}

  makePayment(amount: number) {
   
    this.http.post<any>(`${environment.backendUrl}/create-order`, { amount }).subscribe({
      next: (order: any) => {
        const options = {
          key: environment.razorpayKeyId,
          amount: order.amount,
          currency: "INR",
          name: "SpotifyTune Subscription",
          description: "Test Transaction",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fflower-logo.html&psig=AOvVaw1GwFh_NkjIQEzVQr1mKK3&ust=1709285679624000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC1lsCf0IQDFQAAAAAdAAAAABAJ",
          order_id: order.id,
          handler: (response: any) => {
            console.log(response);
            alert("Payment Done");
          },
          prefill: { 
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9307864263"
          },
          notes: {
            address: "Razorpay Corporate Office"
          },
          theme: {
            color: "#F37254"
          }
        };
        const rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response: any){
          console.error(response.error.code);
          console.error(response.error.description);
          console.error(response.error.source);
          console.error(response.error.step);
          console.error(response.error.reason);
          console.error(response.error.metadata.order_id);
          console.error(response.error.metadata.payment_id);
          alert("Payment Failed");
        });
        rzp1.open();
      },
      error: (error) => console.error(error)
    });
  }
  
}  
 