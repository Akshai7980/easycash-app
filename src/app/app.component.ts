import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(
    platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen
      ) {
    console.log()
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      console.log(localStorage.getItem('userdetails'));
      if(localStorage.getItem('userdetails')==null || localStorage.getItem('userdetails')=='undefined' || localStorage.getItem('userdetails')=='null' || localStorage.getItem('userdetails')==undefined || localStorage.getItem('userdetails')==''){
      
   this.rootPage = 'WelcomePage';
      }else{
 
       this.rootPage= TabsPage;
      }
    });
  }
}
