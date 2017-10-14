import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';

import {ListSocketDemoProvider} from '../../providers/list-socket-demo/list-socket-demo';
/**
 * Generated class for the Demo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo2',
  templateUrl: 'demo2.html',
})
export class Demo2Page {

  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              public listSocketDemoProvider: ListSocketDemoProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo2Page');

  }

  openModal(){
    let modal=this.modalCtrl.create('Demo3Page');
    modal.present();
  }

}
