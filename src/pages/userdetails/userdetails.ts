import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {
  userdetails:any=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app:App) {
      
    this.userdetails= this.navParams.get('userdetails');
    console.log(this.userdetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailsPage');
  }
 gochat(){
this.app.getRootNav().push('ChatPage',{touserdetails:this.userdetails});
  }
}
