import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagmentRoutingModule } from './admin-managment-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent
  ],
  imports: [
    AdminManagmentRoutingModule,
    CommonModule,
    ButtonModule,
  ]
})
export class AdminManagmentModule { }

