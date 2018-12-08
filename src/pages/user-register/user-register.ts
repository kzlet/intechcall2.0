import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserSignupPage } from '../user-signup/user-signup';


@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {

  backgrounds = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg'
  ];
  public loginForm: any;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }


  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data');
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }

  signup()
  {
    const modal = this.modalCtrl.create(UserSignupPage);
    modal.present();
  }

}