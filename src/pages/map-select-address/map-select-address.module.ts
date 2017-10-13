import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapSelectAddressPage } from './map-select-address';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MapSelectAddressPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MapSelectAddressPage),
  ],
})
export class MapSelectAddressPageModule {}
