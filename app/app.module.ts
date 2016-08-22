import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { TodoComponent }  from './todo.component';
import { FormComponent }  from './form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routing],
  declarations: [ AppComponent,TodoComponent,FormComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
