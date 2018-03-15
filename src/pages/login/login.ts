import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { NotFoundPage } from '../not-found/not-found';
import { LogService }  from '../../app/utility/service/log/log.service';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { IndexPage } from '../index/index';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  notfound:any;
  uname:string;
  upwd:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mylog:LogService,public myhttp:myHttpService,
    public toast:ToastController) {
    this.notfound=NotFoundPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log(123);
     this.myhttp.sendRequest("login/login.php?uname="+this.uname+
    "&upwd="+this.upwd)
    .subscribe((data:any)=>{
      let msg="";
      if(data.code==1){
        this.navCtrl.push(IndexPage);
      }else if(data.code==-2){
        msg="用户名或密码错误";
      }else{;
        msg="登录失败，原因"+data.msg;
      }
      this.toast.create({
        position:"bottom",
        message:msg,
        duration:1500
      }).present()
    })
  }
}
