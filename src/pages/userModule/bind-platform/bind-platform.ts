import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the BindPlatformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bind-platform',
    templateUrl: 'bind-platform.html',
})
export class BindPlatformPage {
    SOURCE_BAIDU:boolean=false;
    SOURCE_ELEMA:boolean=false;
    SOURCE_MEITUAN:boolean=false;
    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BindPlatformPage');
        this.checkuserIsBinding();
    }

    bindEle(){
            let data = {
                userId: window.localStorage.getItem('userId'),
            };
            this.httpList.toBindEleme(data).then(returnData => {
                console.log(returnData);
                if (returnData.result == 'success') {
                    this.navCtrl.push('BrowserPage',{'browser':{
                        url:returnData.data,
                    }});
                } else {
                    this.pop.alert(returnData.msg);
                }
            })
    }

    bindMeituan(){
        this.pop.alert('暂不支持');
    }
    bindBaidu(){
        this.pop.alert('暂不支持');
    }
    checkuserIsBinding(){
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.checkuserIsBinding(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.SOURCE_BAIDU= returnData.data.SOURCE_BAIDU ==1 ? true: false;
                this.SOURCE_ELEMA= returnData.data.SOURCE_ELEMA ==1 ? true: false;
                this.SOURCE_MEITUAN= returnData.data.SOURCE_MEITUAN ==1 ? true: false;
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }
}
