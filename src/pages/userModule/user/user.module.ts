import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
      CommonModule,
      FileUploadModule,
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserPageModule {}
