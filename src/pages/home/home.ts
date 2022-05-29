import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {CountrypopoverPage} from '../countrypopover/countrypopover';
import { DataProvider } from '../../providers/data/data';
import { AjaxFunctionProvider } from '../../providers/ajax-function/ajax-function';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  getvalues:any=[];
  userdata:any=[];
  lattitude:any;
  longitude:any;
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public dataprovider:DataProvider,
    public app:App,public Ajax:AjaxFunctionProvider
  ) {
    this.userdata=JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.userdata);
    console.log(this.userdata);
   
  //  this.getvalues=this.dataprovider.getitem();
console.log(this.getvalues)
  }
gosend(){
 // this.app.getRootNav().setRoot('CheckavailabilityPage');
  this.app.getRootNavs()[0].push('CheckavailabilityPage')
}
  // open country select popover
  CountryPopover() {
    const popover = this.popoverCtrl.create(CountrypopoverPage,{cssClass: 'country-dropdown'});
    popover.present();
  }
gotonotification(user){
  this.navCtrl.push('UserdetailsPage',{userdetails:user});
}
}
