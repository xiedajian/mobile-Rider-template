import {Injectable} from '@angular/core';
/**
 * 请求地址头
 */
// 测试环境
// export const APP_SERVE_URL:string = 'http://192.168.1.88/v1';
// 生产环境
export const APP_SERVE_URL:string = 'http://118.190.150.148:9001/jfsc';
/**
 * App全局变量
 */
@Injectable()
export class AppConfig {
    static PCmodel:boolean = false;        //PC端调试模式
    static Appmodel:number=3;             //1首次启动  2.今日首次启动 3普通模式启动
    //设备信息
    static deviceId:string = '';          //设备id
    static deviceCordova:string = '';          //设备上运行的Cordova版本
    static deviceModel:string = '';           //设备型号或产品的名称
    static devicePlatform:string = '';          //操作系统名称
    static devicePlatformVersion:string = '';          //操作系统版本
    static deviceManufacturer:string = '';          //设备的制造商
    static deviceSerial:string = '';          //设备硬件序列号
    //APP信息
    static platform:string = '';          // android  ios
    static appName:string = 'CRM_KmfApp';           //CRM_KmfApp
    static appVersion:string = '2.0.2';        //版本号 2.0.2
    //导购用户信息
    static userName:string = '';          //账号名
    static token:string = '';             //token
    static userInfo:any = {};             //用户信息

    //获取设备高度
    public static getWindowHeight() {
        return window.screen.height;
    }

    //获取设备宽度
    public static getWindowWidth() {
        return window.screen.width;
    }

    //获取本地时间  格式：2017-01-03
    public static getLocalTime() {
        let date = new Date();
        let month:any = date.getMonth() + 1;
        let strDate:any = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let dd:string = date.getFullYear() + "-" + month + "-" + strDate;
        return dd;
    }

    //获取本地时间  格式：20170103
    public static getLocalTime2() {
        let date = new Date();
        let month:any = date.getMonth() + 1;
        let strDate:any = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let dd:string = date.getFullYear() + "" + month + "" + strDate;
        return dd;
    }

    //获取token
    public static getToken():string {
        return this.token || '';
    }

    //获取设备id
    public static getDeviceid():string {
        return this.deviceId || '';
    }

    //去字符串两侧空格
    public static trim(str) :string{
        return str.replace(/(^s*)|(s*$)/g, "");
    }

    //正则，不能输入表情
    public static RegExp(str,event) {
        let regex=/[^\a-zA-Z0-9\u4E00-\u9FA5]/g;
        if(regex.test(str)){
            str = str.replace(regex, "");
            event.target.value=str;//显示文本替换掉
           return false;
        }
    }

    // 正则，不能输入表情和中文
    public static RegExpCn(str) {
        let regex=/[^\a-zA-Z0-9\|\$\(\)\*\+\.\[\]\?\\\/\^\{\}\-~`!@#%&_=,<>;:'"]/g;
        if(regex.test(str)){
            // str = str.replace(regex, "");
            // event.target.value=str;//显示文本替换掉
            return true;
        }
    }


}

