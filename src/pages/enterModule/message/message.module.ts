import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
      PipesModule,
    IonicPageModule.forChild(MessagePage),
  ],
})
export class MessagePageModule {}
