import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WanshanXinxiPage } from './wanshan-xinxi';

import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    WanshanXinxiPage,
  ],
  imports: [
      CommonModule,
      FileUploadModule,
    IonicPageModule.forChild(WanshanXinxiPage),
  ],
})
export class WanshanXinxiPageModule {}
