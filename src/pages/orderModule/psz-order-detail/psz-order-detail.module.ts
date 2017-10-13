import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PszOrderDetailPage } from './psz-order-detail';

@NgModule({
  declarations: [
    PszOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PszOrderDetailPage),
  ],
})
export class PszOrderDetailPageModule {}
