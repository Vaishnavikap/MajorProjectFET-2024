import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

declare const Razorpay: any;

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js').then(() => {
      console.log('Razorpay SDK loaded');
    }).catch(error => console.error('Failed to load Razorpay SDK:', error));
  }

  loadRazorpayScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof document !== 'undefined') {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject('Razorpay SDK loading failed');
        document.body.appendChild(script);
      } else {
        reject('Document object not available');
      }
    });
  }
  
  makePayment(amount: number): void {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      console.error('User ID not found in session storage');
      return;
    }

    this.http.post(`${environment.backendUrl}/create-order`, { amount, userId }).subscribe({
      next: (order: any) => {
        const options = {
          key: environment.razorpayKeyId,
          amount: order.amount,
          currency: 'INR',
          name: 'SpotifyTune Subscription',
          description: 'Test Transaction',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fflower-logo.html&psig=AOvVaw1GwFh_NkjsIQEzVQr1mKK3&ust=1709285679624000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC1lsCf0IQDFQAAAAAdAAAAABAJ',
          order_id: order.id,
          handler: function (response: any) {
            alert('Payment Done');
          },
          prefill: {
            name: 'Gaurav Kumar',
            email: 'gaurav.kumar@example.com',
            contact: '9307864263',
          },
          notes: {
            address: 'Razorpay Corporate Office'
          },
          theme: {
            color: '#F37254'
          }
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
      },
      error: (error) => console.error('Error creating order:', error)
    });
  }
}
