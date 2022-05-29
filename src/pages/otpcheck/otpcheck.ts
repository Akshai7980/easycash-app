import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-otpcheck',
  templateUrl: 'otpcheck.html',
})
export class OtpcheckPage {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController, 
    public viewCtrl : ViewController,  
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpcheckPage');
  }

  proceed() {
    this.viewCtrl.dismiss();
    const popover = this.popoverCtrl.create('SuccessalertPage',{},{ cssClass: 'custom-popover' });
    popover.present();
  }

}
