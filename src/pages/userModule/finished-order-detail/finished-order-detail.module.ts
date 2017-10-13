import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishedOrderDetailPage } from './finished-order-detail';

@NgModule({
  declarations: [
    FinishedOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FinishedOrderDetailPage),
  ],
})
export class FinishedOrderDetailPageModule {}
