import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the UpdateEnterPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-enter-pwd',
  templateUrl: 'update-enter-pwd.html',
})
export class UpdateEnterPwdPage {
    oldpwd:string='';
    newpwd:string='';
    newpwd1:string='';
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateEnterPwdPage');
  }

    modifyShopUserPwd() {
        let data = {
            userId: window.localStorage.getItem('userId'),
            oldPwd: this.oldpwd,
            newPwd: this.newpwd,
        };
        this.httpList.modifyShopUserPwd(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.pop.alert(returnData.msg);
            } else {
                this.pop.alert(returnData.msg);
            }
        },err=>{
            console.log(err);
            this.pop.alert('获取数据失败');
        })
    }

}
