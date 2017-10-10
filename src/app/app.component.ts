import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// import {ListSocketDemoProvider} from '../providers/list-socket-demo/list-socket-demo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = 'OrderPage';
  rootPage:any = 'LoginPage';

  constructor(platform: Platform,
              // listsSocket: ListSocketDemoProvider,
              statusBar: StatusBar, splashScreen: SplashScreen) {
    // mui.init();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // listsSocket.startSocket();
  }
}

