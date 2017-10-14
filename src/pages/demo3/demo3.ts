import {Component,Input, OnChanges,OnInit , SimpleChange,ViewChild,ChangeDetectionStrategy ,ChangeDetectorRef} from '@angular/core';
import {IonicPage, NavController, NavParams,Content } from 'ionic-angular';

import {Events} from 'ionic-angular';
/**
 * Generated class for the Demo3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-demo3',
    templateUrl: 'demo3.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
// ChangeDetectorRef是为了处理数据更新，但是视图没有更新的问题
export class Demo3Page  {

    constructor(public navCtrl: NavController,
                private cdRef: ChangeDetectorRef,
                public events: Events,
                public navParams: NavParams) {
    }
    @ViewChild('moreSite') moreSite: Content;
    firstPosition;
    morePostion: any;

    ionViewDidLoad() {
        console.log('ionViewDidLoad Demo3Page');
    }

    setPosition(e) {
        this.firstPosition=e.firstPosition;
        this.morePostion = e.morePostion;
        // console.log(this.firstPosition);
        // console.log(this.morePostion);

        //还原 更多地址滚动条 到第一条
        // console.log(this.moreSite._scrollContent.nativeElement.scrollTop);
        // this.moreSite.scrollTo(0, 0, 0);
        this.moreSite._scrollContent.nativeElement.scrollTop=0;
        //更新视图
        this.cdRef.detectChanges();
    }

    selectAddress(position:any){
        console.log(position);
        console.log(111);
        this.events.publish('selectAddressOver',{'position':position});
        this.navCtrl.pop();

    }
}
