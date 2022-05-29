import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,  PopoverController } from 'ionic-angular';
import { AjaxFunctionProvider } from '../../providers/ajax-function/ajax-function';
import {alertpage} from '../register/register'
import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl,
    // MaxLengthValidator
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-confirmpopover',
  templateUrl: 'confirmpopover.html',
})
export class ConfirmpopoverPage {
  
  FormSubmit : boolean = false;
  
  
  
  public formgroup: FormGroup;

  conformation: AbstractControl;

  public usertoken:any;
  public regdata:any = {};
  constructor(public navCtrl: NavController,
    public formbuilder:FormBuilder,
    public viewCtrl : ViewController, 
    public popoverCtrl: PopoverController, 
    public navParams: NavParams,
    public Ajax:AjaxFunctionProvider) {
      
      this.usertoken = localStorage.getItem('usertoken');
      this.regdata = this.navParams.get('registrationdata');
      this.regdata.token = this.usertoken;

      this.formgroup = formbuilder.group({
      
      conformation:['', Validators.required],
      })

      this.conformation= this.formgroup.controls['conformation'];
      console.log(this.regdata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmpopoverPage');
  }

  presentPopover(myEvent,title,subtitle) {
    let popover = this.popoverCtrl.create(alertpage,{Title: title,SubTitle : subtitle},{cssClass: 'page-go-sign'});
    popover.present({
      ev: myEvent
    });
  }
  

  Login(){
   
    if (this.usertoken == this.conformation.value) {
      console.log(this.usertoken +''+ this.conformation.value);
      console.log(this.regdata);
      this.Ajax.postMethod('api_registration',this.regdata).then((res:any) =>{
        console.log(res);
        if(res.status==true ){
          this.navCtrl.push('LoginPage');
        }else{
        }
    })
      this.viewCtrl.dismiss();
  
   
    }else {
      // alert ("Token doesn't match");
      this.presentPopover('','Token mismatch','');
    }
  }

}
