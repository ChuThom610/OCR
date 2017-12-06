webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navParams, zone, http) {
        var _this = this;
        this.navParams = navParams;
        this.zone = zone;
        this.http = http;
        this.seri = null;
        this.latitude = null;
        this.longitude = null;
        this.book = null;
        this.message = null;
        this.seri = navParams.get('seri');
        this.latitude = navParams.get('latitude');
        this.longitude = navParams.get('longitude');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("https://the.sachmem.vn/api/v1/user_keys", {
            key: this.seri,
            latitude: this.latitude,
            longitude: this.longitude
        }, options)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (resp) {
            if (resp.code == "1") {
                _this.zone.run(function () {
                    _this.book = resp.book;
                    _this.message = resp.message;
                });
            }
            else {
                _this.zone.run(function () {
                    _this.message = resp.message;
                });
            }
        });
    }
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/pages/detail/detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Kết quả</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Kết quả</h3>\n\n  <strong>{{message}}</strong>\n\n\n\n  <div *ngIf="book">\n\n    <h3>Chi tiết</h3>\n\n    <p>Tên sách: {{book.name}}</p>\n\n    <p>Sê-ri sách: {{book.code}}</p>\n\n    <div><img src="{{book.bookcover}}"></div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter_code_enter_code__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qrcode_qrcode__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tabQRCode = __WEBPACK_IMPORTED_MODULE_3__qrcode_qrcode__["a" /* QRCodePage */];
        this.tabEnterCode = __WEBPACK_IMPORTED_MODULE_1__enter_code_enter_code__["a" /* EnterCodePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tabEnterCode" tabTitle="Nhập mã" tabIcon="code-working"></ion-tab>\n\n  <ion-tab [root]="tabQRCode" tabTitle="Quyét mã" tabIcon="qr-scanner"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Hướng dẫn" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnterCodePage = (function () {
    function EnterCodePage(app, geolocation, diagnostic, alertCtrl) {
        this.app = app;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.seri = null;
        this.latitude = null;
        this.longitude = null;
    }
    EnterCodePage.prototype.submitCode = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true
        };
        // let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
        // let errorCallback = (e) => console.error(e);
        // this.diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);
        this.diagnostic.getLocationMode()
            .then(function (state) {
            if (state == _this.diagnostic.locationMode.LOCATION_OFF) {
                var confirm_1 = _this.alertCtrl.create({
                    title: '<b>Chia sẻ Vị trí</b>',
                    message: 'Vị trí (Location) trên điện thoại của bạn chưa được bật/chia sẻ. Hãy vào Cài đặt (Settings) để bật vị trí và chia sẻ thông tin (cấp quyền) vị trí cho ứng dụng này.',
                    buttons: [
                        {
                            text: 'Vào Cài đặt (Settings)',
                            handler: function () {
                                _this.diagnostic.switchToLocationSettings();
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        }).catch(function (e) { return console.error(e); });
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { seri: _this.seri, latitude: _this.latitude, longitude: _this.longitude });
        });
    };
    return EnterCodePage;
}());
EnterCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enter-code',template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/pages/enter_code/enter_code.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Nhập số sê-ri trực tiếp\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Hướng dẫn</h3>\n\n  <p>Bạn nhập đúng dãy số sê-ri trên thẻ sử dụng Sách Mềm vào ô dưới đây sau đó bấm nút KIỂM TRA.</p>\n\n\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="nhập số sê-ri" [(ngModel)]="seri"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button icon-left full (click)="submitCode()" color="primary">\n\n    <ion-icon md="md-checkmark-circle-outline" full></ion-icon>\n\n    Kiểm tra\n\n  </button>\n\n\n\n  <br>\n\n  <p>Chú ý: Điện thoại cần có kết nối Internet.</p>\n\n</ion-content>'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/pages/enter_code/enter_code.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EnterCodePage);

//# sourceMappingURL=enter_code.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Giới thiệu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n    <img src="/assets/sachmem.png">\n\n  </div>\n\n  \n\n  <p>\n\n    Ứng dụng này kiểm tra số sê-ri trên Thẻ cào Sách Mềm để cảnh báo thẻ sử dụng đó là không hợp lệ. \n\n    Mã cào của thẻ không hợp lệ sẽ không sử dụng được với hệ thống Sách Mềm. \n\n    Sách gắn số sê-ri không hợp lệ có thể là sách giả.\n\n  </p>\n\n\n\n  <h3>Hướng dẫn sử dụng</h3>\n\n  Bạn có hai cách để kiểm tra thẻ cào đó có thể là giả không:\n\n  <ul>\n\n    <li>Dùng camera của điện thoại để quét mã qrcode, là ảnh hình vuông đen trắng trên thẻ.</li>\n\n    <li>Nhập dãy số seri trên thẻ để kiểm tra.</li>\n\n  </ul>\n\n\n\n  <h3>Liên hệ</h3>\n\n  <p>\n\n    <a href="http://gioithieu.sachmem.vn">\n\n      <ion-icon name="md-home"></ion-icon>http://sachmem.vn</a>\n\n  </p>\n\n  <p>\n\n    <a href="mailto:lienhe@sachmem.vn">\n\n      <ion-icon name="md-mail" item-start></ion-icon>lienhe@sachmem.vn</a>\n\n  </p>\n\n  <p>\n\n    <a href="tel:+84 24 3512.22.22">\n\n      <ion-icon name="md-call" item-start></ion-icon>+84. 24 3512.22.22</a>\n\n  </p>\n\n  <p>\n\n    <a href="https://www.facebook.com/sachmem.vn">\n\n      <ion-icon name="logo-facebook" item-start></ion-icon>Facebook</a>\n\n  </p>\n\n\n\n  <h3>Phiên bản</h3>\n\n  <p>Phiên bản 0.1 ngày 1/12/2017.</p>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QRCodePage = (function () {
    function QRCodePage(app, qrScanner, geolocation, diagnostic, alertCtrl) {
        this.app = app;
        this.qrScanner = qrScanner;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.qrData = null;
        this.latitude = null;
        this.longitude = null;
        this.started = false;
        //this.scanCode();
    }
    QRCodePage.prototype.hideCamera = function () {
        this.qrScanner.hide();
    };
    QRCodePage.prototype.showCamera = function () {
        this.qrScanner.show();
    };
    QRCodePage.prototype.scanCode = function () {
        var _this = this;
        this.started = true;
        this.qrScanner.show();
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var options = {
                        enableHighAccuracy: true
                    };
                    _this.diagnostic.getLocationMode()
                        .then(function (state) {
                        if (state == _this.diagnostic.locationMode.LOCATION_OFF) {
                            var confirm_1 = _this.alertCtrl.create({
                                title: '<b>Chia sẻ Vị trí</b>',
                                message: 'Vị trí (Location) trên điện thoại của bạn chưa được bật/chia sẻ. Hãy vào Cài đặt (Settings) để bật vị trí và chia sẻ thông tin (cấp quyền) vị trí cho ứng dụng này.',
                                buttons: [
                                    {
                                        text: 'Vào Cài đặt (Settings)',
                                        handler: function () {
                                            _this.diagnostic.switchToLocationSettings();
                                        }
                                    }
                                ]
                            });
                            confirm_1.present();
                        }
                    }).catch(function (e) { return console.error(e); });
                    _this.geolocation.getCurrentPosition(options).then(function (resp) {
                        _this.qrData = text;
                        _this.latitude = resp.coords.latitude;
                        _this.longitude = resp.coords.longitude;
                        _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], { seri: _this.qrData, latitude: _this.latitude, longitude: _this.longitude });
                    });
                    _this.started = false;
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
                // show camera preview
                //this.qrScanner.show();
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    return QRCodePage;
}());
QRCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-qrcode',template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/pages/qrcode/qrcode.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Nhập bằng camera</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: none transparent;" padding>\n\n  <div *ngIf="!started">\n\n    <h3>Hướng dẫn</h3>\n\n    <p>Bạn bấm nút BẮT ĐẦU QUYÉT dưới đây và để phần ảnh hình vuông trên thẻ vào giữa camera.</p>\n\n\n\n    <button ion-button full icon-left (click)="scanCode()" color="primary">\n\n      <ion-icon name="qr-scanner"></ion-icon>\n\n      Quyét và kiểm tra\n\n    </button>\n\n\n\n    <br>\n\n    <p>Chú ý: Điện thoại cần có kết nối Internet.</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/pages/qrcode/qrcode.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], QRCodePage);

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_enter_code_enter_code__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_qrcode_qrcode__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_qr_scanner__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_enter_code_enter_code__["a" /* EnterCodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_qrcode_qrcode__["a" /* QRCodePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_enter_code_enter_code__["a" /* EnterCodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_qrcode_qrcode__["a" /* QRCodePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__["a" /* Diagnostic */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tomu-uet/internship/working/OCR/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tomu-uet/internship/working/OCR/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map