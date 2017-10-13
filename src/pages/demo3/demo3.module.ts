import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Demo3Page} from './demo3';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        Demo3Page,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(Demo3Page),
    ],
})
export class Demo3PageModule {
}
