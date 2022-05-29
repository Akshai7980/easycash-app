import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AjaxFunctionProvider } from '../../providers/ajax-function/ajax-function';
// import { HomePage } from '../home/home';
import {alertpage} from '../register/register'
import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl
} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FormSubmit : boolean = false;
  usertype:any='';
 public formgroup: FormGroup;
email:AbstractControl;
password:AbstractControl;

  constructor(public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public Ajax:AjaxFunctionProvider, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      
     this.usertype = localStorage.getItem('userType');
      this.formgroup = formbuilder.group({
        email:['', Validators.required],
        password:['', Validators.required]
      })
     
      this.email = this.formgroup.controls['email'];
      this.password=this.formgroup.controls['password'];
  }

  CheckEmail (email){
    var reg = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
    // console.log(reg.test(email));
    if(reg.test(email)){
      return false;
    }else{
      return true;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  presentPopover(myEvent,title,subtitle) {
    let popover = this.popoverCtrl.create(alertpage,{Title: title,SubTitle : subtitle},{cssClass: 'page-go-sign'});
    popover.present({
      ev: myEvent
    });
  }
  

  gologin(){
    this.FormSubmit = true;
    if(this.formgroup.valid){
      
      this.Ajax.postMethod('api_logincheck',this.formgroup.value).then((res:any) =>{
        console.log(res);
        if(res.status==true){
          localStorage.setItem('userdetails',JSON.stringify(res.userdetails));
          this.navCtrl.setRoot(TabsPage);
        }else{
          // alert('Enter a valid Email')
          this.presentPopover('','Enter a valid email or password','');
        }
        
      
    })
    }else{
     
      return false;
    }
  
   
  }
  gosignup(){
    localStorage.setItem('userType',this.usertype);
    this.navCtrl.push('RegisterPage',{userType : this.usertype});
  }
}