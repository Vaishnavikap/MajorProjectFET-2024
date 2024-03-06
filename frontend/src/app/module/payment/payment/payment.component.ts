import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

// Declare Razorpay to inform TypeScript of its existence
declare const Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js').then(() => {
      console.log('Razorpay SDK loaded');
    }).catch(error => console.error('Failed to load Razorpay SDK:', error));
  }

  loadRazorpayScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject('Razorpay SDK loading failed');
      document.body.appendChild(script);
    });
  }

  makePayment(amount: number) {
    this.http.post<any>(`${environment.backendUrl}/create-order`, { amount }).subscribe({
      next: (order: any) => {
        const options = {
          key: environment.razorpayKeyId,
          amount: order.amount,
          currency: "INR",
          name: "Subscription Name",
          description: "Test Transaction",
          image: "https://example.com/your_logo.png", // Update the image URL
          order_id: order.id,
          handler: (response: any) => {
            console.log(response);
            alert("Payment Successful");
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999"
          },
          notes: {
            address: "Corporate Office"
          },
          theme: {
            color: "#F37254"
          }
        };

        // Ensure Razorpay is defined before using it
        if (typeof Razorpay !== 'undefined') {
          const rzp1 = new Razorpay(options);
          rzp1.on('payment.failed', function (response: any) {
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
        } else {
          console.error('Razorpay SDK not loaded.');
        }
      },
      error: (error) => console.error('Error creating order:', error)
    });
  }
}
