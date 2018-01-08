import { Component, OnInit } from '@angular/core';


import { Customer } from './customer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm : FormGroup;
    customer: Customer= new Customer();
    ngOnInit() {
      this.customerForm = new FormGroup( {
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        sendCatalog: new FormControl(true)
      });
        
    }
    save() {
        console.log(this.customerForm.value);
        // console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 }
