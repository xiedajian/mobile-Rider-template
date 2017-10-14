import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

/**
 * Generated class for the LianxiFangshiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lianxi-fangshi',
    templateUrl: 'lianxi-fangshi.html',
})
export class LianxiFangshiPage {
    kefuPopShow: boolean = false;

    userLianxi={
        mobile1:'',
        mobile2:'18000000001',
        address:'',
    }
    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LianxiFangshiPage');
        this.getShosUserConnType();
    }

    lianxiKefu() {
        this.kefuPopShow = true;
    }
    cancelCall(){
        this.kefuPopShow = false;
    }

    backPage(){
        this.navCtrl.pop();
    }

    addmobile(){

    }

    //获取用户联系方式
    getShosUserConnType() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.getShosUserConnType(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.userLianxi.address=returnData.data.address;
                this.userLianxi.mobile1=returnData.data.connectionphone1;
            } else {
                this.pop.alert(returnData.msg);
            }
        },err=>{
            console.log(err);
            this.pop.alert('获取数据失败');
        })
    }
}
