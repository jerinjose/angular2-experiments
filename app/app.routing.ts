import { Routes, RouterModule } from '@angular/router';

import { TodoComponent }      from './todo.component';
import { FormComponent }      from './form.component';

const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
