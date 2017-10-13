import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ListSocketDemoProvider} from '../../providers/list-socket-demo/list-socket-demo';
/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
    obj:object;
    num:number=1;
    demo2Page:string='Demo2Page';
    constructor(public navCtrl: NavController,
                listSocketDemoProvider: ListSocketDemoProvider,
                public navParams: NavParams) {
        this.obj=listSocketDemoProvider;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }
  gotodemo2(){
    this.navCtrl.push('Demo2Page');
  }
  taggleNum(){
    this.num=this.num===0? 1:0;
  }

}
