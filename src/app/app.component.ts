import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public backand: BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.backand.init({
      appName: 'gerenciadorfinal',
      signUpToken: '8afc62c5-55b7-430d-8248-1b7a8e62f9ff',
      anonymousToken: '37caac04-ef8d-41a2-b3aa-4753fe9abfd1',
      mobilePlatform: 'ionic'
    });
  }

}
