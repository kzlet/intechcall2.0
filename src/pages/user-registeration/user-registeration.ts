import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';
import { PrivacyPage } from '../privacy/privacy';
import { TermsPage } from '../terms/terms';

@Component({
  selector: 'page-user-registeration',
  templateUrl: 'user-registeration.html',
})
export class UserRegisterationPage {

  user:string ="login";
  uuid: any;

constructor(public modalCtrl: ModalController, public toastCtrl: ToastController,private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private loadingCtrl: LoadingController, private http: Http) {
    this.nativeStorage.getItem('uuid')
    .then(
      data => {
        this.uuid = data;
        console.log("UUID before registeration:" + this.uuid);
      },
      error => console.error(error)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterationPage');
  }

  openModal2()
  {
  let profileModal = this.modalCtrl.create(PrivacyPage);
      profileModal.present();
  }
  
  openModal1()
  {
  let profileModal = this.modalCtrl.create(TermsPage);
      profileModal.present();
  }

//   signup() {
//     if (this.name === undefined ||  this.email === undefined || this.dob === undefined || this.post_code === undefined) {
//         let alert = this.alertCtrl.create({
//             title: 'All fields are required',
//             buttons: ['OK']
//           });
//           alert.present();
//     }
//     else if (this.password != this.conpassword) {
//         let alert = this.alertCtrl.create({
//             title: 'Passwords are not same',
//             buttons: ['OK']
//           });
//           alert.present();
//     }
//     else
//   {
//     let loader2 = this.loadingCtrl.create({
//       content: "Validating Postal Code..."
//     });
//     loader2.present();
  
//     this.apiUrl = 'http://api.postcodes.io/postcodes/'+ this.post_code +'/validate';
  
//     console.log(this.apiUrl);
  
//     this.http.get(this.apiUrl).map(res => res.json())
//       .subscribe(data => {
//         this.code_data = data.result;
//           loader2.dismiss();
     
//           if(this.code_data === 'true' || this.code_data === true )
// {

//          let loader = this.loadingCtrl.create({
//             content: "User Registeration in Progress..."
//         });
//         loader.present();
  
//         this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/usersignup.php?name=' + this.name + '&email=' + this.email +'&post_code=' + this.post_code + '&password='+ this.password + '&dob='+ this.dob + '&uuid=' + this.uuid + '&city=' + this.city;
        
       
//         this.http.get(this.apiUrl).map(res => res.json())
//           .subscribe(data => {
//            loader.dismiss();
  
//                 console.log(data);

//                 this.nativeStorage.setItem('email', data.email)
//                 .then(
//                   () => console.log('Email Stored!'),
//                   error => console.error('Error storing item', error)
//                 );

//                 this.nativeStorage.setItem('confirm_code', data.confirm_code)
//                 .then(
//                   () => console.log('Confirm code Stored!'),
//                   error => console.error('Error storing item', error)
//                 );

//                 this.nativeStorage.setItem('name', data.name)
//                 .then(
//                   () => console.log('User Name Stored!'),
//                   error => console.error('Error storing item', error)
//                 );
         
//                 this.nativeStorage.setItem('profile_picture', data.profile_picture)
//                 .then(
//                   () => console.log('User Picture Stored!'),
//                   error => console.error('Error storing item', error)
//                 );

//                 this.nativeStorage.setItem('city', this.city)
//                 .then(
//                   () => console.log('User City Stored!'),
//                   error => console.error('Error storing item', error)
//                 );

//                 this.user_code = data.confirm_code;
      
//                 var status = data.Status;
  
//                 if (status === 'exist') {
  
//                     let alert = this.alertCtrl.create({
//                         title: 'User Id already Exists',
//                         buttons: ['OK']
//                       });
//                       alert.present();
//                 }
  
//                 else if(status === 'failed')
//                 {
//                   let alert = this.alertCtrl.create({
//                     title: 'Registeration Failed ! Server Problem',
//                     buttons: ['OK']
//                   });
//                   alert.present();
//                 }
//                 else {
                  
//                   let alert = this.alertCtrl.create({
//                     title: 'Registeration Successful',
//                     buttons: ['OK']
//                   });
//                   alert.present();
  
//                   if (this.imageURI === undefined || this.imageURI === 'undefined')
//                   {
//                      console.log("Do nothing");
//                      this.navCtrl.setRoot(UserconfirmPage,{send:this.user_code});
//                   }
//                   else{
//                   let loader = this.loadingCtrl.create({
//                     content: "Please Login to Continue..."
//                 });
//                 loader.present();
//                 loader.dismiss();
  
//                     this.navCtrl.setRoot(UserconfirmPage,{send:this.user_code});
//                   }
                    
//                 }
//             }, error => {
//                 console.log(error);// Error getting the data
//             });


//           }
//           else
//           {
//             alert("Postal code Verification failed");
//           }

//           }, error => {
//             console.log(error); // Error getting the data
//           });
    
//     }
//   }

// signIn() 
//   { 
      
//     this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/userlogin.php?email=' + this.email + '&password=' + this.password;
//     console.log(this.apiUrl)
  
//      if (this.email === undefined || this.password === undefined) {
//        let alert = this.alertCtrl.create({
//          title: 'Sign-in Error',
//          subTitle: 'Email and Password Required',
//          buttons: ['OK']
//        });
//        alert.present();
//        return;
//      }
//      let loader = this.loadingCtrl.create({
//        content: "Signing In..."
//      });
//      loader.present();
  
//      console.log(this.apiUrl);
  
//      this.http.get(this.apiUrl).map(res => res.json())
//      .subscribe(data => {
  
//        console.log(data);
//        loader.dismissAll();

//        this.nativeStorage.setItem('email', data.email)
//        .then(
//          () => console.log('Email Stored!'),
//          error => console.error('Error storing item', error)
//        );

//        this.nativeStorage.setItem('city', data.city)
//        .then(
//          () => console.log('Email Stored!'),
//          error => console.error('Error storing item', error)
//        );


//        this.nativeStorage.setItem('name', data.name)
//        .then(
//          () => console.log('User Name Stored!'),
//          error => console.error('Error storing item', error)
//        );

//        this.nativeStorage.setItem('profile_picture', data.profile_picture)
//        .then(
//          () => console.log('User Picture Stored!'),
//          error => console.error('Error storing item', error)
//        );

  
//        var str = data.Status;
//        console.log("Active:" + data.is_active);

//        if (str === 'success') {
//   if(data.is_active === '1' || data.is_active === 1){

//     var mosque_authentication = 0;
//     var user_authentication = 1;

//     this.nativeStorage.setItem('mosque_authentication', mosque_authentication)
//     .then(
//       () => console.log('mosque_authentication In-Active!'),
//       error => console.error('Error storing item', error)
//     );
  
//     this.nativeStorage.setItem('user_authentication', user_authentication)
//     .then(
//       () => console.log('user_authentication Active!'),
//       error => console.error('Error storing item', error)
//     );
 
//     let alert = this.alertCtrl.create({
//       title: 'Login Successful',
//       subTitle: 'Welcome to Halal House',
//       buttons: ['OK']
//     });
//     alert.present();
//     this.navCtrl.setRoot(Home1Page);
//   }
//   else{
//     let alert = this.alertCtrl.create({
//       title: 'Activation Failed',
//       subTitle: 'Please verify your account',
//       buttons: ['OK']
//     });
//     alert.present();
//   }

//        } else if (str === 'failed') {
//          let alert = this.alertCtrl.create({
//            title: 'Authentication Failed',
//            subTitle: 'Email or Password is Invalid',
//            buttons: ['OK']
//          });
//          alert.present();
//          this.navCtrl.setRoot(UserconfirmPage);
//        }
//      }, error => {
//        console.log(error); // Error getting the data
  
//        let alert = this.alertCtrl.create({
//          title: 'Network Failed',
//          subTitle: 'Please try again later',
//          buttons: ['OK']
  
//        });
//        alert.present();
//        loader.dismissAll();
//      });
//    }

}
