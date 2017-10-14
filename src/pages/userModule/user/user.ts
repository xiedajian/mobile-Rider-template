import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

//使用文件上传插件
import { FileUploader } from 'ng2-file-upload';

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

    money: number = 0;
    userPortal:string='assets/img/user/touxiang.png';

    public uploader:FileUploader = new FileUploader({
        url: "http://www.download.com:80/uploadFile",
        method: "POST",
        itemAlias: "uploadedfile"
    });

    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserPage');
        this.getShopUserAccount();
        this.getShopUserPortal();
    }

    //获取用户余额
    getShopUserAccount() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        console.log('userId',data);
        this.httpList.getShopUserAccount(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.money = returnData.data || 0;
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }

    //获取用户头像
    getShopUserPortal() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.getShopUserPortal(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.userPortal = returnData.data;
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }

    selectedFileOnChanged(e) {
        // 这里是文件选择完成后的操作处理
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        var that=this;
        reader.onload = function(event){
            console.log(event);
            var base64data = this.result; // base64位图片数据
            console.log(base64data);
            that.updateUserImg(base64data);
        }
    }

    //上传用户头像
    updateUserImg(base64data){
        let data={
            userId: window.localStorage.getItem('userId'),
            imgStr:base64data
        }
        this.httpList.updateUserImg(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.userPortal = base64data;
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }
}
