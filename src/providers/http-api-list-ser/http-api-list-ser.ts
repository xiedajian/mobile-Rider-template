import {Injectable} from '@angular/core';
import {HttpserProvider} from '../httpser/httpser';


/*
  Generated class for the HttpApiListSerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * 接口Api列表     统一管理
 */
@Injectable()
export class HttpApiListSerProvider {
    // APP_SERVE_URL: string = 'http://122.114.181.158:8080/jswm/';
    APP_SERVE_URL: string = 'http://192.168.3.172:8080/jswm/';

    constructor(public httpser: HttpserProvider) {
        console.log('Hello HttpApiListSerProvider Provider');
    }

    //1、获取验证码
    getValidateCode(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/getValidateCode';
        return this.httpser.get(url, data);
    }

    test(){
        let url = 'http://192.168.3.172:8080/jswm/userControllerjswm/getShopUserAccount';
        return this.httpser.get(url,{userId:'34'});
    }

    //2、 登录
    shopUserLogin(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/shopUserLogin';
        return this.httpser.post(url, data);
    }


    //3、 注册
    shopUserRegist(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/shopUserRegist';
        return this.httpser.post(url, data);
    }
    //4、 验证验证码
    checkValidateCode(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/checkValidateCode';
        return this.httpser.get(url, data);
    }
    //5、忘记密码
    forgetPassword(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/forgetPassword';
        return this.httpser.post(url, data);
    }
    //6、修改登录密码
    modifyShopUserPwd(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/modifyShopUserPwd';
        return this.httpser.post(url, data);
    }


    //7、完善信息
    perfectShopsUserInfo(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/perfectShopsUserInfo';
        return this.httpser.post(url, data);
    }
    //8、获取商户审核信息
    getperfectShopsUserInfo(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/getperfectShopsUserInfo';
        return this.httpser.get(url, data);
    }
    //9、消息列表
    getNoReadMessage(data) {
        let url = this.APP_SERVE_URL + 'shpersonalCenter/getNoReadMessage';
        return this.httpser.get(url, data);
    }
    //10、设置消息为已读
    setMessageToRead(data) {
        let url = this.APP_SERVE_URL + 'shpersonalCenter/setMessageToRead';
        return this.httpser.post(url, data);
    }
    //10、个人中心：获取商户头像
    getShopUserPortal(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/getShopUserPortal';
        return this.httpser.get(url, data);
    }
    //11、个人中心：获取商户余额
    getShopUserAccount(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/getShopUserAccount';
        return this.httpser.get(url, data);
    }
    //12、个人中心：修改商户头像
    updateUserImg(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/updateUserImg';
        return this.httpser.post(url, data);
    }
    //13、绑定外卖平台step1
    toBindEleme(data) {
        let url = this.APP_SERVE_URL + 'shpersonalCenter/toBindEleme';
        return this.httpser.get(url, data);
    }
    //14、查询是否已经绑定外卖平台
    checkuserIsBinding(data) {
        let url = this.APP_SERVE_URL + 'shpersonalCenter/checkuserIsBinding';
        return this.httpser.get(url, data);
    }

    //15、添加/修改联系方式
    setShosUserConnType(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/setShosUserConnType';
        return this.httpser.get(url, data);
    }
    //16、获取联系方式
    getShosUserConnType(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/getShosUserConnType';
        return this.httpser.get(url, data);
    }
    //17、优质商家申请
    submitShopUserGood(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/submitShopUserGood';
        return this.httpser.get(url, data);
    }
    //18、取消优质商家
    cancelShopUserGood(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/cancelShopUserGood';
        return this.httpser.get(url, data);
    }
    //19、已完成订单查询
    getCompletedOrder(data) {
        let url = this.APP_SERVE_URL + 'orderController/getCompletedOrder';
        return this.httpser.post(url, data);
    }
    //24、设置,找回交易密码
    setPaymentPwd(data) {
        let url = this.APP_SERVE_URL + 'userControllerjswm/setPaymentPwd';
        return this.httpser.post(url, data);
    }

}
