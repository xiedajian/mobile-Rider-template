import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DqhOrderDetailPage } from './dqh-order-detail';

@NgModule({
  declarations: [
    DqhOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DqhOrderDetailPage),
  ],
})
export class DqhOrderDetailPageModule {}
