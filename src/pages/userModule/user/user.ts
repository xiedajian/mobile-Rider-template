import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  // BindPlatformPage:string='BindPlatformPage';
  // LianxiFangshiPage:string='LianxiFangshiPage';
  // FinishedOrderSelectPage:string='FinishedOrderSelectPage';
  // MoneyChongzhiPage:string='MoneyChongzhiPage';
  // PingtaiSetPage:string='PingtaiSetPage';
  // ShangjiaApplyPage:string='ShangjiaApplyPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  backPage(){
    this.navCtrl.pop();
  }
  toMegPage(){
    this.navCtrl.push('MessagePage');
  }

}
