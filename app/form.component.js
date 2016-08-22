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
var FormComponent = (function () {
    function FormComponent() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.mobile = '';
        this.submitted = false;
    }
    FormComponent.prototype.formSubmitted = function () {
        this.submitted = true;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            template: "<div class=\"container form\">\n              <form #form=\"ngForm\" novalidate>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label for=\"firstname\">First name</label>\n                        <input class=\"form-control\" #firstname=\"ngModel\" [(ngModel)]=\"firstName\" id=\"firstname\" placeholder=\"Enter first name\" name=\"firstname\" required/>\n                        <span [hidden]=\"(firstname.valid && submitted)\" class=\"error-msg\">Required</span>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Last name</label>\n                        <input class=\"form-control\" [(ngModel)]=\"lastName\"  placeholder=\"Enter last name\" name=\"lastName\" required/>\n                        <span class=\"error-msg\"></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Email</label>\n                        <input class=\"form-control\" [(ngModel)]=\"email\"  placeholder=\"Enter email\" name=\"email\" required/>\n                        <span class=\"error-msg\"></span>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Mobile</label>\n                        <input class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Enter mobile\" name=\"mobile\" required/>\n                        <span class=\"error-msg\"></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row btn-row\">\n                    <div class=\"col-sm-12\">\n                      <button class=\"btn btn-primary btn-md add-btn\" (click)=\"formSubmitted()\">Add User</button>\n                    </div>\n                  </div>\n              </form>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map