import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PopSerProvider} from '../../../providers/pop-ser/pop-ser';
import {HttpApiListSerProvider} from '../../../providers/http-api-list-ser/http-api-list-ser';
/**
 * Generated class for the NewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-detail',
  templateUrl: 'new-detail.html',
})
export class NewDetailPage {
  news:any={
    title:'',
      content:''
  };
  constructor(public navCtrl: NavController,
              public pop: PopSerProvider,
              public httpList: HttpApiListSerProvider,
              public navParams: NavParams) {
    console.log(this.navParams.data);
    this.news=this.navParams.data.news;
      console.log(this.news);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDetailPage');
    this.setMessageToRead(this.news.id);
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
