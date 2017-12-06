import { Component, NgZone } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  seri = null;
  latitude = null;
  longitude = null;
  book = null;
  message = null;

  constructor(public navParams: NavParams,
      public zone: NgZone,
      public http: Http) {
    this.seri = navParams.get('seri');
    this.latitude = navParams.get('latitude');
    this.longitude = navParams.get('longitude');
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');
    var options = new RequestOptions({ headers: headers });

    this.http.post("https://the.sachmem.vn/api/v1/user_keys",
      {
        key: this.seri,
        latitude: this.latitude,
        longitude: this.longitude
      }, options)
      .map(resp => resp.json())
      .subscribe((resp) => {
        if (resp.code == "1") {
          this.zone.run(() => {
            this.book = resp.book;
            this.message = resp.message;
          });

        } else {
          this.zone.run(() => {
            this.message = resp.message;
          });
        }
    });
  }

}
