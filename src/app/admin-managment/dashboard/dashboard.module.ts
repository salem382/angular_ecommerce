import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../category/categories/categories.component';
import { AddUpdateCategoryComponent } from '../category/add-update-category/add-update-category.component';
import { CategoryDetailComponent } from '../category/category-detail/category-detail.component';


const routes: Routes = [
  {path:"category", component:CategoriesComponent},
  {path:"categoryDetail/:id", component:CategoryDetailComponent},
  {path:"addCategory", component:AddUpdateCategoryComponent},
  {path:"updateCategory/:id", component:AddUpdateCategoryComponent}, 
];



@NgModule({
  declarations: [
    DashboardMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    DashboardMainComponent
  ]
})
export class DashboardModule { }
