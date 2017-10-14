import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the SetJiaoyiMimaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-jiaoyi-mima',
  templateUrl: 'set-jiaoyi-mima.html',
})
export class SetJiaoyiMimaPage {
    mobile:string='';
    code:string='';
    pwd:string='';
    pwd2:string='';
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetJiaoyiMimaPage');
  }

    getCode() {
        let data={
            mobile:this.mobile,
        };
        this.httpList.getValidateCode(data).then(returnData=>{
            console.log(returnData);
            if(returnData.result=='success'){
                this.pop.alert(returnData.code);
            }else {
                this.pop.alert(returnData.msg);
            }
        })
    }
    setPaymentPwd() {
        let data = {
            mobile:this.mobile,
            payMentCode:this.pwd,
            code:this.code
            // userId: window.localStorage.getItem('userId'),
        };
        this.httpList.setPaymentPwd(data).then(returnData => {
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
