import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoPage } from './demo';

@NgModule({
  declarations: [
    DemoPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage),
  ],
})
export class DemoPageModule {}
