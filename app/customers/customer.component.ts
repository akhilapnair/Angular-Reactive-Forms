import { Component, OnInit } from '@angular/core';


import { Customer } from './customer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm : FormGroup;
    customer: Customer= new Customer();
    constructor(private fb: FormBuilder) { 

    }
    ngOnInit() {
      this.customerForm = this.fb.group( {
        firstName: '',
        lastName:'',
        email:'',
        sendCatalog: true
      });
    }
    populateData() {
        this.customerForm .patchValue( {
            firstName: 'akhila',
            // lastName: 'vipin' ,
            email: 'akhi.p@gmail.com',
            sendCatalog:'true'
          });
    }
     save() {
        console.log(this.customerForm.value);
        // console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 }
