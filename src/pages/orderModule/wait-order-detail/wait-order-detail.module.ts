import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitOrderDetailPage } from './wait-order-detail';

@NgModule({
  declarations: [
    WaitOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitOrderDetailPage),
  ],
})
export class WaitOrderDetailPageModule {}
