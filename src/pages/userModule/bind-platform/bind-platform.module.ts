import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindPlatformPage } from './bind-platform';

@NgModule({
  declarations: [
    BindPlatformPage,
  ],
  imports: [
    IonicPageModule.forChild(BindPlatformPage),
  ],
})
export class BindPlatformPageModule {}
