import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './inventory/category/category.component';
import { ClientComponent } from './components/client/client.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CategoryComponent,
    ClientComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
