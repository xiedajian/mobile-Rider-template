import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

//使用文件上传插件
import {FileUploader} from 'ng2-file-upload';
import {Events} from 'ionic-angular';
/**
 * Generated class for the WanshanXinxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-wanshan-xinxi',
    templateUrl: 'wanshan-xinxi.html',
})
export class WanshanXinxiPage {

    xieyi: boolean = true;

    userInfo = {
        userId: window.localStorage.getItem('userId'),
        linkman: '',
        shopName: '',
        shopAddress: '',
        shopDetailAddress: '',
        // 店铺门头与分组人合照照片Base64编码字符串
        shopLogo: '',
        // 身份证正面照 Base64编码字符串
        corporationFornt: '',
        // 身份证反面照 Base64编码字符串
        corporationRear: '',
        // 店铺营业执照 Base64编码字符串
        businessLicense: '',
        licenseImg: '',
        province: '',
        city: '',
        area: '',
        latitude:'',//维度
        longitude:'' //经度
    }
    public uploader: FileUploader = new FileUploader({
        url: "http://www.download.com:80/uploadFile",
        method: "POST",
        itemAlias: "uploadedfile"
    });

    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                public events: Events,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WanshanXinxiPage');
        this.events.subscribe('selectAddressOver', (data) => {
            console.log(data);
            this.userInfo.shopAddress=data.position.address;
            this.userInfo.latitude=data.position.location.lat;
            this.userInfo.longitude=data.position.location.lng;
            console.log(this.userInfo);
        });
    }

    backLoginPage() {
        this.navCtrl.popToRoot();
    }
    //获取经纬度定位
    getlocal(){

    }

    selectedFileOnChanged(e, id) {
        // 这里是文件选择完成后的操作处理
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        var that = this;
        reader.onload = function (event) {
            console.log(event);
            var base64data = this.result; // base64位图片数据
            console.log(base64data);
            switch (id) {
                case 'shopLogo':
                    that.userInfo.shopLogo = base64data;
                    break;
                case 'corporationFornt':
                    that.userInfo.corporationFornt = base64data;
                    break;
                case 'corporationRear':
                    that.userInfo.corporationRear = base64data;
                    break;
                case 'businessLicense':
                    that.userInfo.businessLicense = base64data;
                    break;
                case 'licenseImg':
                    that.userInfo.licenseImg = base64data;
                    break;
            }
        }
    }

    changeXieyi() {
        this.xieyi = !this.xieyi;
    }

    //完善信息
    perfectShopsUserInfo() {
        if (!this.xieyi) {
            this.pop.alert('请先同意协议');
            return;
        }
        let data = {
            userId: window.localStorage.getItem('userId'),
            linkman: '',
            shopName: '',
            shopAddress: '',
            shopDetailAddress: '',
            shopLogo: '',
            corporationFornt: '',
            corporationRear: '',
            businessLicense: '',
            licenseImg: '',
            province: '',
            city: '',
            area: '',
        };
        // console.log(this.userInfo);
        if(this.userInfo.linkman == '' || this.userInfo.shopName == '' || this.userInfo.shopAddress == '' || this.userInfo.shopDetailAddress == '' || this.userInfo.shopLogo == ''){
            this.pop.alert('参数不能为空');
            return;
        }

        this.httpList.perfectShopsUserInfo(this.userInfo).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.navCtrl.push('ShenheIngPage');
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }
}
