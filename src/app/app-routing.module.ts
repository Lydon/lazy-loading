import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './common/index#AdminModule'
  },
  {
    path: 'login',
    loadChildren: './common/index#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './common/index#RegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
