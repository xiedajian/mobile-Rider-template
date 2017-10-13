import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo2Page } from './demo2';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Demo2Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Demo2Page),
  ],
})
export class Demo2PageModule {}
