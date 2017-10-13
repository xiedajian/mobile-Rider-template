import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YcdDetailPage } from './ycd-detail';

@NgModule({
  declarations: [
    YcdDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(YcdDetailPage),
  ],
})
export class YcdDetailPageModule {}
