import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-mynotification',
  templateUrl: 'mynotification.html',
})
export class MynotificationPage {
  getvalues:any=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public dataprovider:DataProvider) {
      
    this.getvalues=this.dataprovider.getitem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MynotificationPage');
  }
  goback(){
    this.navCtrl.pop();
  }

  gotoUserVal(){
    this.navCtrl.push('CheckavailabilityPage');
  }
}
