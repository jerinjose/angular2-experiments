import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `<div class="container form">
              <form #form="ngForm" novalidate>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="firstname">First name</label>
                        <input class="form-control" #firstname="ngModel" [(ngModel)]="firstName" id="firstname" placeholder="Enter first name" name="firstname" required/>
                        <span [hidden]="(firstname.valid && submitted)" class="error-msg">Required</span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last name</label>
                        <input class="form-control" [(ngModel)]="lastName"  placeholder="Enter last name" name="lastName" required/>
                        <span class="error-msg"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" [(ngModel)]="email"  placeholder="Enter email" name="email" required/>
                        <span class="error-msg"></span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Mobile</label>
                        <input class="form-control" [(ngModel)]="mobile" placeholder="Enter mobile" name="mobile" required/>
                        <span class="error-msg"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row btn-row">
                    <div class="col-sm-12">
                      <button class="btn btn-primary btn-md add-btn" (click)="formSubmitted()">Add User</button>
                    </div>
                  </div>
              </form>
            </div>`
})

export class FormComponent {
  public firstName:string;
  public lastName:string;
  public email:string;
  public mobile:string;
  public submitted:boolean;

  constructor() {
     this.firstName = '';
     this.lastName = '';
     this.email = '';
     this.mobile = '';
     this.submitted = false;
   }

   formSubmitted(){
      this.submitted = true;
   }
}
