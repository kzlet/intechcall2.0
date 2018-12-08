import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignupPage {

  constructor( private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignupPage');
  }
  
  close() {
    this.view.dismiss();
  }

}
