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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    UserRegisterPage,
    UserSignupPage,
    SubcategoryPage,
    VerifyjobPage
  ],
  imports: [
    BrowserModule,
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
    VerifyjobPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
