import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {
  subcat: { 'name': string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.subcat = [
      {'name':'Cleaning'},
      {'name':'Washing'},
      {'name':'Home Repair'},
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoryPage');
  }

  itemSelected(index : string)
  {
    console.log("Index:" + index);
    
  }

}
