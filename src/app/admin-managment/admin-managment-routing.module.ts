import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';


const routes: Routes = [

  {path:"", component:AdminLayoutComponent, children:[
    {
      path:"dashboard", 
      data: { routeName: 'dashboard' },
      loadChildren:()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
    },
    {
      path:"category", 
      data: { routeName: 'dashboard' },
      loadChildren:()=> import('./category/category.module').then((m)=>m.CategoryModule)
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminManagmentRoutingModule { }
