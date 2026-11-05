import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { NewOrderComponent } from './components/new-order/new-order.component';



@NgModule({
  declarations: [
    OrderListComponent,
    NewOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
