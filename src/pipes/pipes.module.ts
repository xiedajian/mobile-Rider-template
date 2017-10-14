import { NgModule } from '@angular/core';
import { WaimaiPipe } from './waimai/waimai';
import { TimeToStringPipe } from './time-to-string/time-to-string';
@NgModule({
	declarations: [WaimaiPipe,
    TimeToStringPipe],
	imports: [],
	exports: [WaimaiPipe,
    TimeToStringPipe]
})
export class PipesModule {}
