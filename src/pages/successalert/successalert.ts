import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-successalert',
  templateUrl: 'successalert.html',
})
export class SuccessalertPage {

  constructor(public navCtrl: NavController,  
    public viewCtrl : ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessalertPage');
  }

  close() {
    this.navCtrl.setRoot(WelcomePage);
  }

}
