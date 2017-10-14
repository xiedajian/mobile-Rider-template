import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the SetYijianFadanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-yijian-fadan',
  templateUrl: 'set-yijian-fadan.html',
})
export class SetYijianFadanPage {
    bindEle:boolean=false;
    bindMeituan:boolean=false;
    bindBaidu:boolean=false;
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetYijianFadanPage');
  }

}
