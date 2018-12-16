import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SubcategoryPage } from '../subcategory/subcategory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  openMenu = false;
  posts: { 'image': string; 'name': string; }[];
  selected = "";
  slides: { 'title': string; }[];

  constructor(public navCtrl: NavController) {

    this.slides = [
    {'title':'slide 1'},
    {'title':'slide 2'},
    {'title':'slide 3'}
    ];

    this.posts = [
      { 'image': 'imgs/icon1.png', 'name': 'Driver' },
      { 'image': 'imgs/icon2.png', 'name': 'Pest Control' },
      { 'image': 'imgs/icon3.png', 'name': 'Home SPA' },
      { 'image': 'imgs/icon4.png', 'name': 'Laundry' },
    ]

  }

  ionViewWillLeave() {
    console.log("User left");
  }

  addEvent(index: string, name:string) {
    this.selected = index;
    console.log("NAme" + name);
    this.navCtrl.push(SubcategoryPage, {name});
  }

  next() {
    this.navCtrl.push(RegisterPage);
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }
}
