import { Component } from '@angular/core';
import { ViewController, NavParams, NavController, Platform, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-verifyjob',
  templateUrl: 'verifyjob.html',
})
export class VerifyjobPage {
  myParam: string;
   codes: NativeGeocoderReverseResult[];

  constructor(public modalCtrl: ModalController, private nativeGeocoder: NativeGeocoder, public platform: Platform, private geo: Geolocation, private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  this.currentco();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyjobPage');
  }
  
  dismiss() {
    this.view.dismiss();
  }
  
  next()
  {
    const modal = this.modalCtrl.create(MapPage);
    modal.present();
  }


     currentco(){
      this.platform.ready().then(() => {
        
                var options = {
                  timeout : 10000
                };
                this.geo.getCurrentPosition(options).then(resp =>{
                 console.log(resp.coords.latitude);
                 console.log(resp.coords.longitude);
  
                 this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                 .then((result: NativeGeocoderReverseResult[]) =>{
  
                  this.codes = result; 
                  console.log(JSON.stringify(this.codes));
  
                 // console.log(JSON.parse(result));
  
                  console.log(this.codes[0].locality);
  
                  console.log(this.codes[0].countryName);

  
                  }
                )
                 
                 .catch((error: any) => console.log(error));
              
                }).catch(()=>{
                 console.log("Error to get location");
                 alert("Error to get location");
                });
                });
  }
}
