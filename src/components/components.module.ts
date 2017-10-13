import { NgModule } from '@angular/core';
import { OrderDetailComponent } from './order-detail/order-detail';
import { MapSiteShowComponent } from './map-site-show/map-site-show';
import { MapPositionPickerComponent } from './map-position-picker/map-position-picker';
import { MuiPageHeaderComponent } from './mui-page-header/mui-page-header';
@NgModule({
	declarations: [OrderDetailComponent,
    MapSiteShowComponent,
    MapPositionPickerComponent,
    MuiPageHeaderComponent],
	imports: [],
	exports: [OrderDetailComponent,
    MapSiteShowComponent,
    MapPositionPickerComponent,
    MuiPageHeaderComponent]
})
export class ComponentsModule {}
