import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpcheckPage } from './otpcheck';

@NgModule({
  declarations: [
    OtpcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpcheckPage),
  ],
})
export class OtpcheckPageModule {}
