import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-countrypopover',
  templateUrl: 'countrypopover.html',
})
export class CountrypopoverPage {

  items : any= ['Nigeria','India'];

  constructor(public navCtrl: NavController,
    public viewCtrl : ViewController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountrypopoverPage');
  }

  // popover dismiss function.
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
