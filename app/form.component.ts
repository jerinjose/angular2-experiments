import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EqualValidator } from './equal-validator.directive';

@Component({
  selector: 'my-form',
  template: `<div class="container form">
              <form  #form="ngForm" novalidate>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First name</label>
                        <input type="text" class="form-control" [(ngModel)]="user.firstName" #firstname="ngModel" name="firstname" minlength="4" placeholder="Enter first name" required/>
                        <small *ngIf = "(!firstname.valid && submitted)" class="text-danger">Firstname is required (minimum 4 characters).</small>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First name</label>
                        <input type="text" class="form-control" [(ngModel)]="user.lastName" #lastname="ngModel" name="lastname" minlength="4" placeholder="Enter first name" required/>
                        <small *ngIf = "(!lastname.valid && submitted)" class="text-danger">Lastname is required (minimum 4 characters).</small>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" [(ngModel)]="user.email" #emailfield="ngModel" name="emailfield"  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" placeholder="Enter email" required/>
                        <small *ngIf = "(!emailfield.valid && submitted)" class="text-danger">Email is required and format should be <i>john@doe.com</i>.</small>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Mobile</label>
                        <input type="text" class="form-control" [(ngModel)]="user.mobile" #mobileField="ngModel" name="mobileField" pattern="[0-9]{10}" placeholder="Enter mobile number" required/>
                        <small *ngIf = "(!mobileField.valid && submitted)" class="text-danger">Mobile is required and format should be <i>9876543210</i>.</small>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" [(ngModel)]="user.password" #passwordfield="ngModel" validateEqual="confirmPasswordField" reverse="true" name="passwordfield"  placeholder="Enter password" required/>
                        <small *ngIf = "(!passwordfield.valid && submitted)" class="text-danger">Password is required.</small>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" [(ngModel)]="user.confirmPassword" #confirmPasswordField="ngModel"  validateEqual="passwordfield" reverse="false" name="confirmPasswordField" placeholder="Enter confirm password" required/>
                        <small *ngIf="(!confirmPasswordField.valid && submitted)" class="text-danger">Password mismatch.</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <re-captcha (captchaResponse)="handleCorrectCaptcha($event)" site_key="6LfxMwwUAAAAAB20RysosF6YpGzLvzMYldeFsdvm"></re-captcha>
                  </div>
                  <div class="row btn-row">
                      <div class="col-sm-12">
                          <button type="button" class="btn btn-primary btn-md add-btn" (click)="addUser(form.value, form.valid)">Add User</button>
                      </div>
                  </div>
              </form>
            </div>`,
      directives: [EqualValidator]
})

export class FormComponent implements OnInit {
    public submitted: boolean;
    public user: {
        firstName: string;
        lastName: string;
        email : string;
        mobile : string;
        password : string;
        confirmPassword : string;
    };


    ngOnInit() {
       this.user = {
         firstName: '',
         lastName : '',
         email : '',
         mobile : '',
         password : '',
         confirmPassword : ''
       }
       this.submitted = false;
   }

   addUser(model,isValid){
      this.submitted = true;
      if(isValid){
          this.user = {
            firstName: '',
            lastName : '',
            email : '',
            mobile : '',
            password : '',
            confirmPassword : ''
          }
          this.submitted = false;
          alert("Successfully added the user details...");
      }
   }

   handleCorrectCaptcha(e){
      console.log(e);
   }
}
