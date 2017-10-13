import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 *  地图 - 选点 - 反推地址 modal
 */

@IonicPage()
@Component({
  selector: 'page-map-select-address',
  templateUrl: 'map-select-address.html',
})
export class MapSelectAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapSelectAddressPage');
  }

}
