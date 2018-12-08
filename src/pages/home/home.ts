import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  openMenu = false;
  posts: { 'image': string; 'name': string; }[];
  selected = "";

  constructor(public navCtrl: NavController) {

    this.posts = [
      {'image':'imgs/icon1.png' , 'name':'Driver'},
      {'image':'imgs/icon2.png' , 'name':'Pest Control'},
      {'image':'imgs/icon3.png' , 'name':'Home SPA'},
      {'image':'imgs/icon4.png' , 'name':'Laundry'},
    ]

  }

  addEvent(index: string) {
    this.selected = index;
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
