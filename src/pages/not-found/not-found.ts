import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  count:number=3;
  timer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    this.mytime();
  }

  mytime(){
    this.timer=setInterval(()=>{
      this.count--;
      if(this.count==0){
        this.navCtrl.pop();
        clearInterval(this.timer);
        this.timer=null;
      }
    },1000)
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter NotFoundPage');
    if(this.timer){
      clearInterval(this.timer);
      this.timer=null;
    }
    this.count=3;
    this.mytime();
  }
}
