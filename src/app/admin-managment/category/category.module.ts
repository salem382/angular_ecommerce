import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AddUpdateCategoryComponent } from './add-update-category/add-update-category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


const routes:Routes = [
  {path:"", component:CategoriesComponent},
  {path:"add", component:AddUpdateCategoryComponent},
  {path:"update/:id", component:AddUpdateCategoryComponent},
  {path:"detail", component:CategoryDetailComponent}
]


@NgModule({
  declarations: [
    CategoriesComponent,
    AddUpdateCategoryComponent,
    CategoryDetailComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
