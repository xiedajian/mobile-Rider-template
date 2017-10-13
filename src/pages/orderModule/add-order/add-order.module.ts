import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOrderPage } from './add-order';

@NgModule({
  declarations: [
    AddOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOrderPage),
  ],
})
export class AddOrderPageModule {}
