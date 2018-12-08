import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserRegisterPage } from '../user-register/user-register';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  slide1()
  {
   console.log("Slide 1 selected");
   this.navCtrl.push(UserRegisterPage);
  }
  
  slide2()
  {
    console.log("Slide 2 selected");
  }

  slide3()
  {
    console.log("Slide 3 selected");
  }

  slide4()
  {
    console.log("Slide 4 selected");
  }
}
