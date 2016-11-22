import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { ReCaptchaModule } from 'angular2-recaptcha';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { HttpModule, JsonpModule,HTTP_PROVIDERS } from '@angular/http';



import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { TodoComponent }  from './todo.component';
import { FormComponent }  from './form.component';
import { RestaurantComponent }  from './restaurant.component';
import { RestaurantService } from './Reataurant.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,routing,ReCaptchaModule,HttpModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfD7c8b8zhbXezPwXrFSaWB7Q8P7LOSw4',
      libraries: ["places"]
    })],
  declarations: [ AppComponent,TodoComponent,FormComponent,RestaurantComponent],
  bootstrap:    [ AppComponent],
  providers: [ RestaurantService]
})
export class AppModule { }
