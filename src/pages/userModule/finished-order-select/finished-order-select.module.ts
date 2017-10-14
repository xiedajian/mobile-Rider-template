import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishedOrderSelectPage } from './finished-order-select';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    FinishedOrderSelectPage,
  ],
  imports: [
      PipesModule,
    IonicPageModule.forChild(FinishedOrderSelectPage),
  ],
})
export class FinishedOrderSelectPageModule {}
