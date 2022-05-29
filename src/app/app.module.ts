import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CountrypopoverPage } from '../pages/countrypopover/countrypopover';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
// import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { AjaxFunctionProvider } from '../providers/ajax-function/ajax-function';
import { alertpage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
// import { WelcomePage } from '../pages/welcome/welcome';
import { RoundPipe } from '../pipes/round/round';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CountrypopoverPage,
    TabsPage,
    // RegisterPage,
    alertpage,
    SettingPage,
    RoundPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    CountrypopoverPage,
    HomePage,
    TabsPage, 
    // RegisterPage,
    alertpage,
    SettingPage,
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AjaxFunctionProvider,
    SettingPage,
    
   
   
  ]
})
export class AppModule {}
