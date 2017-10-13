import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOrderPage } from './edit-order';

@NgModule({
  declarations: [
    EditOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOrderPage),
  ],
})
export class EditOrderPageModule {}
