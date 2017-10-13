import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LianxiFangshiPage');
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
}
