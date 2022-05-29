import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkavailability',
  templateUrl: 'checkavailability.html',
})
export class CheckavailabilityPage {

  UserCheck : boolean = true;
  Step1 : boolean = false;
  Step2 : boolean = false;
  PTitle : any = 'USER VALIDATION';

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckavailabilityPage');
  }

  proceed(){
    const popover = this.popoverCtrl.create('OtpcheckPage',{},{ cssClass: 'customotp-popover' });
    popover.present();
  }

  CheckAvailability() {
    this.UserCheck = false;
    this.Step1 = true;
  }

  AmountCheck() {
    this.UserCheck = false;
    this.Step1 = false;
    this.Step2 = true;
  }


}
