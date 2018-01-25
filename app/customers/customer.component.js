"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_1 = require('./customer');
var forms_1 = require('@angular/forms');
var CustomerComponent = (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
        var data = {
            'data': {
                'address': [{
                        'address': 'afdsfdsfsd',
                        'id': 1
                    },
                    {
                        'address': 'afdsfdsfsd sdfsfsdf sdfdsfsdfsdf',
                        'id': 2
                    }],
                'name': [{
                        'id': 1,
                        'name': 'abc'
                    },
                    {
                        'id': 2,
                        'name': 'abcd'
                    }]
            }
        };
        data.data.address.map(function (obj) {
            console.log(obj);
            var data3 = data.data.name.filter(function (obj1) {
                return obj1.id === obj.id;
            });
            var objectgenerated = {};
            objectgenerated.id = obj.id;
            objectgenerated.address = obj.address;
            objectgenerated.name = data3[0].name;
            console.log(objectgenerated);
        });
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            sendCatalog: true
        });
    };
    CustomerComponent.prototype.populateData = function () {
        this.customerForm.patchValue({
            firstName: 'akhila',
            // lastName: 'vipin' ,
            email: 'akhi.p@gmail.com',
            sendCatalog: 'true'
        });
    };
    CustomerComponent.prototype.save = function (data) {
        console.log(data);
        // console.log('Saved: ' + JSON.stringify(customerForm.value));
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            templateUrl: './app/customers/customer.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map