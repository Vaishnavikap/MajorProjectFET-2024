import { Component } from '@angular/core';
import { ApiService } from '../../../shared/api.service';
import { PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  formData =  {
    name: "",
    email: '',
    message: ''
  };
  constructor(private api:ApiService){}

  submitForm() {
    // Send form data to backend here
    console.log(this.formData);
    this.api.createform(this.formData).subscribe((res)=>{
      console.log(res)
      this.formData = {
        name: "",
        email: "",
        message: ""
      };
     
    },(err)=>{
      console.log(err);
    })
    
    

  }
}




  