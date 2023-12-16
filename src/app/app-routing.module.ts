import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './global/components/signup/signup.component';
import { SigninComponent } from './global/components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('lang')!
      ? localStorage.getItem('lang')!
      : 'en',
    pathMatch: 'full',
  },
  {path:':lang', component:SignupComponent},
  {path:':lang/signin', component:SigninComponent},
  {path:':lang/admin', loadChildren:()=>import('./admin-managment/admin-managment.module').then((m)=>m.AdminManagmentModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

