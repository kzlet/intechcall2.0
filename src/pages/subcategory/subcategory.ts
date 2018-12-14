import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { VerifyjobPage } from '../verifyjob/verifyjob';

@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {
  subcat: { 'name': string; }[];
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.name = this.navParams.get('name');

    this.subcat = [
      {'name':'Cleaning'},
      {'name':'Washing'},
      {'name':'Home Repair'},
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoryPage');
  }

  itemSelected(index : string, name :string)
  {
    console.log("Index:" + index);
    console.log("Name" + name);
    this.navCtrl.push(VerifyjobPage, {name});
    
  }

  showToast()
  {
    const toast = this.toastCtrl.create({
      message: 'Our customer support officer will soon reach you !',
      duration: 3000
    });
    toast.present();
  }
}
