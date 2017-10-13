import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderSelectPage } from './order-select';

@NgModule({
  declarations: [
    OrderSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderSelectPage),
  ],
})
export class OrderSelectPageModule {}
