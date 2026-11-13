import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { InventoryModule } from './inventory/inventory.module';
import { ClientComponent } from './components/client/client.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ClientComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    InventoryModule
  ]
})
export class AdminModule { }
