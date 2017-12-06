var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
import { Component } from '@angular/core';
var HomePage = (function () {
    function HomePage() {
        this.qrData = '';
    }
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    })
], HomePage);
export { HomePage };
{
    this.scanCode();
}
hideCamera();
{
    this.qrScanner.hide();
}
showCamera();
{
    this.qrScanner.show();
}
scanCode();
{
    this.qrData = '';
    this.qrScanner.prepare()
        .then(function (status) {
        if (status.authorized) {
            // camera permission was granted
            // start scanning
            var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                console.log('Scanned something', text);
                _this.zone.run(function () {
                    _this.qrData = text;
                });
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
}
//# sourceMappingURL=home.js.map