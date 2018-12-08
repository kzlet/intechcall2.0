import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-verifyjob',
  templateUrl: 'verifyjob.html',
})
export class VerifyjobPage {
  myParam: string;

  constructor(private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyjobPage');
  }
  
  dismiss() {
    this.view.dismiss();
  }
}
