import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { UserRegisterPage } from '../pages/user-register/user-register';
import { UserSignupPage } from '../pages/user-signup/user-signup';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { VerifyjobPage } from '../pages/verifyjob/verifyjob';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { MapPage } from '../pages/map/map';
import { HttpModule } from '@angular/http';
import { ProviderprofilePage } from '../pages/providerprofile/providerprofile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    UserRegisterPage,
    UserSignupPage,
    SubcategoryPage,
    VerifyjobPage,
    MapPage,
    ProviderprofilePage
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
    UserRegisterPage,
    UserSignupPage,
    SubcategoryPage,
    VerifyjobPage,
    MapPage,
    ProviderprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
