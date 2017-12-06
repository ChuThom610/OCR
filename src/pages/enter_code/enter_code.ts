import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-enter-code',
  templateUrl: 'enter_code.html'
})
export class EnterCodePage {
  seri = null;
  latitude = null;
  longitude = null;

  constructor(public app: App,
     private geolocation: Geolocation,
     public diagnostic: Diagnostic,
     public alertCtrl: AlertController) {
  }

  submitCode() {
    var options = {
      enableHighAccuracy: true
    };
    // let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
    // let errorCallback = (e) => console.error(e);
    // this.diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);
    this.diagnostic.getLocationMode()
      .then((state) => {
        if (state == this.diagnostic.locationMode.LOCATION_OFF) {
          let confirm = this.alertCtrl.create({
            title: '<b>Chia sẻ Vị trí</b>',
            message: 'Vị trí (Location) trên điện thoại của bạn chưa được bật/chia sẻ. Hãy vào Cài đặt (Settings) để bật vị trí và chia sẻ thông tin (cấp quyền) vị trí cho ứng dụng này.',
            buttons: [

              {
                text: 'Vào Cài đặt (Settings)',
                handler: () => {
                  this.diagnostic.switchToLocationSettings();

                }
              }
            ]
          });
          confirm.present();
        }
      }).catch(e => console.error(e));
    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.app.getRootNav().push(DetailPage, {seri: this.seri, latitude: this.latitude, longitude: this.longitude});
    });
  }

}
