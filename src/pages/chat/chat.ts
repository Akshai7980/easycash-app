import { Component ,ViewChild, IterableDiffers,HostListener} from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { AjaxFunctionProvider } from '../../providers/ajax-function/ajax-function';
import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl,
    // MaxLengthValidator
} from '@angular/forms';

@IonicPage()

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  host: {'(window:scroll)': 'track($event)'},
})
export class ChatPage {
  @ViewChild(Content) contentArea: Content;
  @HostListener('window:scroll', ['$event']) 
  public chatForm: FormGroup;
  messageInput:AbstractControl;
   chatMessage:any=[];
  touserdetails:any=[];
  userdata:any=[];
  interval:any;
  iterableDiffer:any;
  messagecount : any;
  showfab:boolean=false;
  constructor(public navCtrl: NavController, 
    private _iterableDiffers: IterableDiffers,
    public navParams: NavParams,
    public Ajax:AjaxFunctionProvider, 
    public formbuilder:FormBuilder) {

    this.touserdetails=this.navParams.get('touserdetails');
    console.log(this.touserdetails)
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
this.userdata=JSON.parse(localStorage.getItem('userdetails'));
    this.chatForm = formbuilder.group({
      messageInput:['', Validators.required],
      
    })
    this.Ajax.postMethod('api_receivemessage',{fromId:this.userdata.id,toId:this.touserdetails.id}).then((res:any) =>{
      console.log(res);
      
      if(res.status==true){
       
      this.chatMessage = res.chatlist;
      this.messagecount = res.chatlist.length;
      setTimeout(() => { 
      this.contentArea.scrollToBottom();
      },100)
      }
      else{      
        
      }     
    
  })
  this.interval=setInterval(() => {    
  
      // console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      
    
    this.Ajax.postMethod('api_receivemessage',{fromId:this.userdata.id,toId:this.touserdetails.id}).then((res:any) =>{
    
      if(res.status==true){
      this.chatMessage = res.chatlist;
      if(this.messagecount!=res.chatlist.length){
        this.messagecount = res.chatlist.length;
        setTimeout(() => { 
          this.contentArea.scrollToBottom();
          },100)
       // this.showfab=true;
      }
     
      }
      else{      
        
      }      
    
  })

}, 1000); 
  }
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ChatPage');
  }
  ionViewWillLeave() {
    clearInterval(this.interval);
    console.log('leave view');
  }
  scrolldown(){
    this.showfab=false;
    this.contentArea.scrollToBottom();   
  }
  sendChatMessage(){

   
    this.Ajax.postMethod('api_sendmessage',{fromId:this.userdata.id,toId:this.touserdetails.id, message:this.chatForm.value.messageInput}).then((res:any) =>{
      console.log(res);
      if(res.status==true){
      this.chatMessage = res.chatlist;
     
      this.messagecount = res.chatlist.length;   
      setTimeout(() => { 
        this.contentArea.scrollToBottom();
        },100)
      this.chatForm.reset();
      this.chatForm.controls['messageInput'].setValue('');
      }
      else{
               
      }      
    
  })
    

}
}