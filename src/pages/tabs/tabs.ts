import { Component } from '@angular/core';

import { EnterCodePage } from '../enter_code/enter_code';
import { ContactPage } from '../contact/contact';
import { QRCodePage } from '../qrcode/qrcode';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabQRCode = QRCodePage;
  tabEnterCode = EnterCodePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
