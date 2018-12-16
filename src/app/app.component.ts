import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { OneSignal } from '@ionic-native/onesignal';
import { NativeStorage } from '@ionic-native/native-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RegisterPage; // HomePage

  constructor(private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativeStorage: NativeStorage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.Onesignalstart();
    });
  }

  Onesignalstart()
  {
  this.oneSignal.getIds().then(identity => {
    console.log(identity.userId + 'its USERID');
    this.nativeStorage.setItem('uuid', identity.userId)
      .then(
        () => console.log('UUI Stored!'),
        error => console.error('Error storing item', error)
      );
  });
}

}

