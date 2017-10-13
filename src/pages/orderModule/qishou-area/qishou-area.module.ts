import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QishouAreaPage } from './qishou-area';

@NgModule({
  declarations: [
    QishouAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(QishouAreaPage),
  ],
})
export class QishouAreaPageModule {}
