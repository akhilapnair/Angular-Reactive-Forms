import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {

    customerForm : FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder) {
       let data = {
            'data' : {
              'address':[{
                'address':'afdsfdsfsd',
                'id':1
              },
              {
                'address':'afdsfdsfsd sdfsfsdf sdfdsfsdfsdf',
                'id':2
              }],
              'name': [{
                  'id': 1,
                  'name':'abc'
              },
              {
                  'id': 2,
                  'name':'abcd'
              }]
            }
          }

        data.data.address.map(function(obj) {
            console.log(obj);
            let data3 = data.data.name.filter(function (obj1){
                return obj1.id === obj.id;
            });
            let objectgenerated : any = {}
            objectgenerated.id = obj.id;
            objectgenerated.address = obj.address
            objectgenerated.name = data3[0].name
            console.log(objectgenerated);
        });
}
    ngOnInit() {
      this.customerForm = this.fb.group( {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email:['', Validators.required],
        sendCatalog: true
      });
    }
    populateData() {
        this.customerForm .patchValue( {
            firstName: 'akhila',
            lastName: 'vipin' ,
            email: 'akhi.p@gmail.com',
            sendCatalog:'true'
          });
    }
     save(data: any) {
        console.log(data);

        // console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 }
