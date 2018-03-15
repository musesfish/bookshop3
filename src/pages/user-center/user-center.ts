import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { LoginPage } from '../login/login';
import { IndexPage } from '../index/index';

/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
  uname:string="";

  constructor(public myhttp:myHttpService ,public navCtrl: NavController, 
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }

  ionViewCanEnter(){
    this.myhttp.sendRequest("login/session_data.php")
      .subscribe((data:any)=>{
        //console.log(data);
        if(data.uid==null){
          this.navCtrl.push(LoginPage);
        }else{
          this.uname=data.uname;
        }
      })
  }

  logout(){
     this.myhttp.sendRequest("login/logout.php")
     .subscribe(()=>{
         this.navCtrl.push(IndexPage);
     })
  }
}
