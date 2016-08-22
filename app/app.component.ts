import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="/todos">Angular2</a>
                </div>
                <ul class="nav navbar-nav">
                  <li [routerLinkActive]="['active']"><a routerLink="/todos">Todo</a></li>
                  <li [routerLinkActive]="['active']"><a routerLink="/form">Form</a></li>
                </ul>
              </div>
            </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {}
