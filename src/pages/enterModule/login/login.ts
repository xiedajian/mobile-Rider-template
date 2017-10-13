import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopSerProvider } from '../../../providers/pop-ser/pop-ser';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ForgetPwdPage:string='ForgetPwdPage';
  RegisterPage:string='RegisterPage';

  password:string='';
  userName:string='';
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if ("WebSocket" in window){
      console.log('websocket');
    }else {

      console.log('nowebsocket');
    }
  }

  reverseMessage(){
    console.log(this.userName);
    console.log(this.password);

    // if(this.userName=='' || this.password==''){
    //   this.pop.alert('账号密码不能为空');
    //   return;
    // }
    // this.pop.toast('hello','top');
    // this.pop.alert('hello');
    // this.pop.loading('open');
    this.navCtrl.push('OrderPage');
  }

}
