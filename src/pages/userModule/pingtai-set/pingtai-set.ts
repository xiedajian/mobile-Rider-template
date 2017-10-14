import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PingtaiSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pingtai-set',
  templateUrl: 'pingtai-set.html',
})
export class PingtaiSetPage {
    pepperoni:boolean=false;
    tishiyin:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PingtaiSetPage');
  }
    backPage(){
        this.navCtrl.pop();
    }
    logout(){
      this.navCtrl.setRoot('LoginPage');
    }
}
