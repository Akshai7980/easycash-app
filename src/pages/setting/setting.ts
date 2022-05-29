import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { WelcomePage } from '../welcome/welcome';
import { App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})


export class SettingPage {

  constructor(  public appCtrl: App, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  gotohome()
{
  // this.navCtrl.setRoot('WelcomePage');
  localStorage.setItem('userdetails','');
  this.appCtrl.getRootNav().push('WelcomePage');
}
}
