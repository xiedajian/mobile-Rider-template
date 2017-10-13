import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderMsgImportPage } from './order-msg-import';

@NgModule({
  declarations: [
    OrderMsgImportPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderMsgImportPage),
  ],
})
export class OrderMsgImportPageModule {}
