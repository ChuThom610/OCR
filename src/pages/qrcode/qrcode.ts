import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QRCodePage {
  qrData = null;
  latitude = null;
  longitude = null;
  started = false;

  constructor(public app: App,
    private qrScanner: QRScanner,
    private geolocation: Geolocation,
    public diagnostic: Diagnostic,
    public alertCtrl: AlertController) {
    //this.scanCode();
  }

  hideCamera() {
    this.qrScanner.hide();
  }

  showCamera() {
    this.qrScanner.show();
  }

  scanCode() {
    this.started = true;
    this.qrScanner.show();
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
         // camera permission was granted


         // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          var options = {
            enableHighAccuracy: true
          };
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
            this.qrData = text;
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.app.getRootNav().push(DetailPage, {seri: this.qrData, latitude: this.latitude, longitude: this.longitude});
          });

          this.started = false;
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

         // show camera preview
         //this.qrScanner.show();

         // wait for user to scan something, then the observable callback will be called

       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  }

}
