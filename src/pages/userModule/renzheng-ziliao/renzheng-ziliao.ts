import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the RenzhengZiliaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renzheng-ziliao',
  templateUrl: 'renzheng-ziliao.html',
})
export class RenzhengZiliaoPage {
  userInfo:any={};
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenzhengZiliaoPage');
    this.getperfectShopsUserInfo();
  }

    getperfectShopsUserInfo() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };

        this.httpList.getperfectShopsUserInfo(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
              this.userInfo=returnData.data;
            } else {
                this.pop.alert(returnData.msg);
            }
        },err=>{
            console.log(err);
            this.pop.alert('获取数据失败');
        })
    }

}
