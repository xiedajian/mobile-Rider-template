import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-message',
    templateUrl: 'message.html',
})
export class MessagePage {
    messageList:any=[];
    constructor(public navCtrl: NavController,
                public pop: PopSerProvider,
                public httpList: HttpApiListSerProvider,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MessagePage');
        this.getNoReadMessage();
    }

    backPage() {
        this.navCtrl.pop();
    }

    //获取未读消息
    getNoReadMessage() {
        let data = {
            userId: window.localStorage.getItem('userId'),
        };
        this.httpList.getNoReadMessage(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {
                this.messageList=returnData.data;
            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }


    //获取未读消息
    setMessageToRead(id) {
        let data = {
            userId: window.localStorage.getItem('userId'),
            messageId:id
        };
        this.httpList.setMessageToRead(data).then(returnData => {
            console.log(returnData);
            if (returnData.result == 'success') {

            } else {
                this.pop.alert(returnData.msg);
            }
        })
    }
}
