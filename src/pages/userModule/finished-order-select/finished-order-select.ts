import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the FinishedOrderSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finished-order-select',
  templateUrl: 'finished-order-select.html',
})
export class FinishedOrderSelectPage {
  orderNum:number=0;
  orderList:any=[];
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishedOrderSelectPage');
    this.getCompletedOrder();
  }
    backPage(){
        this.navCtrl.pop();
    }

    //获取用户联系方式
    getCompletedOrder() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.getCompletedOrder(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
              this.orderNum=returnData.data.orderNum;
              this.orderList=returnData.data.orders;
            } else {
                this.pop.alert(returnData.msg);
            }
        },err=>{
            console.log(err);
            this.pop.alert('获取数据失败');
        })
    }
}
/*
{
    "msg": "存在已完成订单!",
    "result": "success",
    "data": {
    "orderNum": 2,
        "orders": [
        {
            "activeat": 1507681096000,
            "address": "崇明东平森林公园房车2432",
            "buyeruserid": 439305706,
            "consignee": "02 先生",
            "createdat": 1507681096000,
            "deliverfee": 0,
            "deliverygeo": "121.47947,31.68348",
            "deliverypoiaddress": "崇明东平森林公园房车2432",
            "description": "",
            "id": 20,
            "income": 0.1,
            "issendsuccess": true,
            "items": [
                {
                    "id": 119,
                    "name": "台湾凤梨-大份",
                    "orderid": 20,
                    "price": 0.1,
                    "quantity": 1,
                    "total": 0.1
                }
            ],
            "onlinepaid": true,
            "orderSourceTypeMode": {
                "icon": "/img/xiao_e.png",
                "id": 2,
                "name": "饿了吗"
            },
            "ordersourcetype": 2,
            "originalprice": 0.11,
            "packagefee": 0,
            "phonelist": "15910368501",
            "platShopInfo": {
                "address": "崇明东平国家森林公园",
                "id": 156621425,
                "latitude": 31.678916,
                "longitude": 121.482345,
                "name": "捷速外卖平台测试店铺",
                "platformuserid": 80526930505138776,
                "userid": 46
            },
            "platformorderid": "3012801677072669717",
            "platformstatus": "unprocessed",
            "refundstatus": "noRefund",
            "rider": {
                "checkStatus": 2,
                "deleted": false,
                "headPic": "ridderpic/a2600728-0e88-4184-bf56-4b83da0f30fa.png",
                "id": 34,
                "issign": true,
                "nickName": "18232871992",
                "qiCode": "100034",
                "registerTime": 1498012622000,
                "riderPassword": "14e1b600b1fd579f47433b88e8d85291",
                "riderTelphone": "18866669999",
                "riderUserNum": "zz100034",
                "state": "1",
                "xCoordinate": 113.64964385,
                "yCoordinate": 34.75661006
            },
            "shopid": 156621425,
            "shopname": "捷速外卖平台测试店铺",
            "status": 6,
            "totalprice": 0.11,
            "userid": 80526930505138776
        },
        {
            "activeat": 1507711321000,
            "address": "河南省郑州市中原区",
            "consignee": "张安",
            "createdat": 1507681096000,
            "deliverfee": 3,
            "deliverygeo": "121.47947,31.68348",
            "deliverypoiaddress": "中原广告产业园3号楼8层170",
            "id": 32,
            "issendsuccess": true,
            "items": [
                {
                    "id": 127,
                    "name": "番茄炒蛋0",
                    "orderid": 32,
                    "price": 7,
                    "quantity": 1,
                    "total": 7
                }
            ],
            "orderSourceTypeMode": {
                "icon": "/img/xiao_jiesu.png",
                "id": 4,
                "name": "捷速订单"
            },
            "ordersourcetype": 4,
            "phonelist": "18500126271",
            "platShopInfo": {
                "address": "河南省郑州市高新区科学大道丹尼斯",
                "id": 46,
                "latitude": 4565,
                "longitude": 4565,
                "name": "测试店铺",
                "platformuserid": 46,
                "userid": 46
            },
            "platformorderid": "7010111171171610711600",
            "shopid": 46,
            "status": 6,
            "totalprice": 10,
            "userid": 46
        }
    ]
}
}*/
