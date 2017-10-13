import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishedOrderSelectPage } from './finished-order-select';

@NgModule({
  declarations: [
    FinishedOrderSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(FinishedOrderSelectPage),
  ],
})
export class FinishedOrderSelectPageModule {}
