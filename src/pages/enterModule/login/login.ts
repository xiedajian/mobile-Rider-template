import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

// import { AppConfig } from '../../../app/app.config';

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

    ForgetPwdPage: string = 'ForgetPwdPage';
    RegisterPage: string = 'RegisterPage';

    password: string = '';
    userName: string = '';

    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                // public appConfig:AppConfig,
                public navParams: NavParams) {
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('userInfo');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        if ("WebSocket" in window) {
            console.log('websocket');
        } else {

            console.log('nowebsocket');
        }
    }

    // reverseMessage(){
    //     this.httpList.test().then((returnData)=>{
    //         console.log(returnData);
    //     })
    // }


    reverseMessage() {
        console.log(this.userName);
        console.log(this.password);

        // if(this.userName=='' || this.password==''){
        //   this.pop.alert('账号密码不能为空');
        //   return;
        // }
        // this.pop.toast('hello','top');
        // this.pop.alert('hello');
        // this.pop.loading('open');


        //登录
        this.httpList.shopUserLogin({mobile: this.userName, pwd: this.password}).then((returnData) => {
            console.log(returnData);
            if (returnData.result == 'success') {
                let userInfo = {
                    "createtime": 1506401852000,
                    "isgood": 0, //是否为优质商家 0:不是(默认) ;2提交;1:通过;3：驳回
                    "portail": "http://192.168.3.172:8080/jfscs/user/pictures/8d9ad5f8-70f7-4bd0-a9a5-0c591f1492cc.jpeg",
                    "shopUserAccount": { //账户信息，注册的时候会自动增加一条该记录
                        "accountid": 1,
                        "balance": 6290.9,
                        "cashdeposit": 29,
                        "integral": -28656,
                        "recharge": 99,
                        "updatetime": 1506398640000,
                        "userid": 34
                    },
                    "shopsmobile": "15910368501",
                    "shopspassword": "14e1b600b1fd579f47433b88e8d85291",
                    "userid": 34
                }
                // this.appConfig.userInfo=returnData.data;
                window.localStorage.setItem('userInfo', JSON.stringify(returnData.data));
                window.localStorage.setItem('userId', returnData.data.userid);
                console.log(returnData.data.usershstatus);
                switch (returnData.data.usershstatus) {
                    case 0:
                        this.navCtrl.push('ShenheIngPage');
                        break;
                    case 1:
                        this.navCtrl.setRoot('OrderPage');
                        break;
                    case 2:
                        this.pop.alert('审核资料未通过，请重新提交资料',()=>{
                            this.navCtrl.push('WanshanXinxiPage');
                        });
                        break;
                    case 4:
                        this.pop.alert('需要先完善资料',()=>{
                            this.navCtrl.push('WanshanXinxiPage');
                        });
                        break;
                }
                // this.navCtrl.setRoot('OrderPage');
            } else {
                this.pop.alert(returnData.msg);
            }
        });

    }

}
