import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShangjiaApplyPage } from './shangjia-apply';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    ShangjiaApplyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ShangjiaApplyPage),
  ],
})
export class ShangjiaApplyPageModule {}
