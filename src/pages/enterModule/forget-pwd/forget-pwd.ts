import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the ForgetPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-pwd',
  templateUrl: 'forget-pwd.html',
})
export class ForgetPwdPage {
    mobile:string;
    code:string;
    password:string;
    password1:string;
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPwdPage');
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

    deitPwd(){
        let data={
            mobile:this.mobile,
            pwd:this.password,
            code:this.code
        };
        this.httpList.forgetPassword(data).then(returnData=>{
            console.log(returnData);
            if(returnData.result=='success'){
                this.pop.alert('成功',()=>{
                    this.navCtrl.pop();
                })
            }else {
                this.pop.alert(returnData.msg);
            }
        })
    }

}
