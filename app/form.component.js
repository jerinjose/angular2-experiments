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
var equal_validator_directive_1 = require('./equal-validator.directive');
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: ''
        };
        this.submitted = false;
    };
    FormComponent.prototype.addUser = function (model, isValid) {
        this.submitted = true;
        if (isValid) {
            this.user = {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                password: '',
                confirmPassword: ''
            };
            this.submitted = false;
            alert("Successfully added the user details...");
        }
    };
    FormComponent.prototype.handleCorrectCaptcha = function (e) {
        console.log(e);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            template: "<div class=\"container form\">\n              <form  #form=\"ngForm\" novalidate>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>First name</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstName\" #firstname=\"ngModel\" name=\"firstname\" minlength=\"4\" placeholder=\"Enter first name\" required/>\n                        <small *ngIf = \"(!firstname.valid && submitted)\" class=\"text-danger\">Firstname is required (minimum 4 characters).</small>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>First name</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" #lastname=\"ngModel\" name=\"lastname\" minlength=\"4\" placeholder=\"Enter first name\" required/>\n                        <small *ngIf = \"(!lastname.valid && submitted)\" class=\"text-danger\">Lastname is required (minimum 4 characters).</small>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" #emailfield=\"ngModel\" name=\"emailfield\"  pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" placeholder=\"Enter email\" required/>\n                        <small *ngIf = \"(!emailfield.valid && submitted)\" class=\"text-danger\">Email is required and format should be <i>john@doe.com</i>.</small>\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Mobile</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.mobile\" #mobileField=\"ngModel\" name=\"mobileField\" pattern=\"[0-9]{10}\" placeholder=\"Enter mobile number\" required/>\n                        <small *ngIf = \"(!mobileField.valid && submitted)\" class=\"text-danger\">Mobile is required and format should be <i>9876543210</i>.</small>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #passwordfield=\"ngModel\" validateEqual=\"confirmPasswordField\" reverse=\"true\" name=\"passwordfield\"  placeholder=\"Enter password\" required/>\n                        <small *ngIf = \"(!passwordfield.valid && submitted)\" class=\"text-danger\">Password is required.</small>\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Confirm Password</label>\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\" #confirmPasswordField=\"ngModel\"  validateEqual=\"passwordfield\" reverse=\"false\" name=\"confirmPasswordField\" placeholder=\"Enter confirm password\" required/>\n                        <small *ngIf=\"(!confirmPasswordField.valid && submitted)\" class=\"text-danger\">Password mismatch.</small>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LfxMwwUAAAAAB20RysosF6YpGzLvzMYldeFsdvm\"></re-captcha>\n                  </div>\n                  <div class=\"row btn-row\">\n                      <div class=\"col-sm-12\">\n                          <button type=\"button\" class=\"btn btn-primary btn-md add-btn\" (click)=\"addUser(form.value, form.valid)\">Add User</button>\n                      </div>\n                  </div>\n              </form>\n            </div>",
            directives: [equal_validator_directive_1.EqualValidator]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map