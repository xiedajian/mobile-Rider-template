import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

/**
 * Generated class for the ShangjiaApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shangjia-apply',
  templateUrl: 'shangjia-apply.html',
})
export class ShangjiaApplyPage {

  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShangjiaApplyPage');
  }
    backPage(){
        this.navCtrl.pop();
    }

    submitShopUserGood(){
        //获取用户联系方式
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.submitShopUserGood(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.pop.alert(returnData.msg);
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }
}
