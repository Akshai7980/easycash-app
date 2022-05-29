import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { AjaxFunctionProvider } from '../../providers/ajax-function/ajax-function';
import { ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {FormBuilder,FormGroup,Validators,AbstractControl,
    // MaxLengthValidator
  } from '@angular/forms';

@IonicPage()


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})



export class RegisterPage {
  FormSubmit : boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public formgroup: FormGroup;
  name:AbstractControl;
  
  lattitude: Number;
  longitude: Number;
  accountnumber:AbstractControl;
  atmnumber:AbstractControl;
  branch:AbstractControl;
  phone:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;
  user_type:AbstractControl;
  cardtype:AbstractControl;
  
  

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public popoverCtrl: PopoverController,
    public Ajax : AjaxFunctionProvider,
    public pdata:DataProvider,
    public navParams: NavParams,
    public formbuilder:FormBuilder) { 
          
       let UserType= localStorage.getItem('userType');
       
    this.formgroup = formbuilder.group({
        name:['', Validators.required],
        lattitude:[''],
        longitude:[''],
        accountnumber:['', Validators.required],
        atmnumber:['', Validators.required ],
        branch:['', Validators.required],
        phone:['', Validators.required],
        email:['',  Validators.required],
        password:['', Validators.required],
        user_type:['', Validators.required],
        cardtype:['',Validators.required], 
      })
      this.name= this.formgroup.controls['name'];
      this.accountnumber= this.formgroup.controls['accountnumber'];
      this.atmnumber= this.formgroup.controls['atmnumber'] ;
      this.branch= this.formgroup.controls['branch'];
      this.phone= this.formgroup.controls['phone'];
      this.email = this.formgroup.controls['email'];
      this.password=this.formgroup.controls['password'];
      this.user_type=this.formgroup.controls['user_type'];
      this.cardtype=this.formgroup.controls['cardtype'];

    this.formgroup.patchValue({
      user_type : UserType
    });
    console.log(this.user_type);
  }
  CheckEmail (email){
    var reg = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
    if(reg.test(email)){
      return false;
    }else{
      return true;
    }
  }

  gologin(){
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
   
  }
  presentPopover(myEvent,title,subtitle) {
    let popover = this.popoverCtrl.create(alertpage,{Title: title,SubTitle : subtitle},{cssClass: 'page-go-sign'});
    popover.present({
      ev: myEvent
    });
  }
  

  gotologin() { 
    this.FormSubmit = true;
    
    console.log(this.formgroup.valid);
   
    if(this.formgroup.valid && this.formgroup.value.atmnumber.length == 16){
      console.log(this.formgroup.value);
      
     localStorage.setItem('registerdata',this.formgroup.value);
      this.Ajax.postMethod('api_emailchecking',{email : this.formgroup.value.email}).then((res:any) =>{
          console.log(res);
          //// response  {"status":true,"token":"cvrg"}////
          if(res.status==true){
            localStorage.setItem('usertoken',res.token)
            const popover = this.popoverCtrl.create('ConfirmpopoverPage',{registrationdata : this.formgroup.value},{ cssClass: 'custom-popover' });
            popover.present();
          }else{
            // /// Email id already exist
            // alert('Email already exist');
            this.presentPopover('','Email already exist',"");



          }
      })
    }
    else{
     
      return  false;
    }
     
  }
 

}
@Component({
  
  template: `
   <div class="main-div">
   <h6> {{heading}}</h6>
   <p class="font-13 padd-p">{{subheading}}</p>
   <button clear (click)="close()"  ion-button  class="submit-btn bordertop font-13" type="submit"  >ok</button>
   </div>
  `
})
export class alertpage {
  public heading:any='';
  public subheading:any='';
  constructor(public viewCtrl: ViewController,
    public navctrl:NavController,
    public Ajax : AjaxFunctionProvider,
    public params:NavParams) {
      this.heading=params.get('Title');
      this.subheading=params.get('SubTitle');
  }

  close() {
    this.viewCtrl.dismiss();
  }
  gomore(){
    this.viewCtrl.dismiss();
  } 
}