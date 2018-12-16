import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { VerifyjobPage } from '../pages/verifyjob/verifyjob';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { MapPage } from '../pages/map/map';
import { HttpModule } from '@angular/http';
import { ProviderprofilePage } from '../pages/providerprofile/providerprofile';
import { UserRegisterationPage } from '../pages/user-registeration/user-registeration';
import { NativeStorage } from '@ionic-native/native-storage';
import { OneSignal } from '@ionic-native/onesignal';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsPage } from '../pages/terms/terms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    SubcategoryPage,
    VerifyjobPage,
    MapPage,
    ProviderprofilePage,
    UserRegisterationPage,
    PrivacyPage,
    TermsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SubcategoryPage,
    VerifyjobPage,
    MapPage,
    ProviderprofilePage,
    UserRegisterationPage,
    PrivacyPage,
    TermsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Geolocation,
    NativeGeocoder,
    NativeStorage,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
