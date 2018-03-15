import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { PayPage } from '../pay/pay';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  olist:Array<any>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public myhttp:myHttpService,public modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }

  ionViewWillEnter(){
     this.myhttp.sendRequest("cart/list.php")
      .subscribe((data:any)=>{
        if(data.code=='-2'){
          this.navCtrl.push(LoginPage);
        }else{
          this.olist=data.data;
        }
      })
  }

  showModal(){
    let mod=this.modal.create(PayPage,{price:1000});
    mod.present();
    mod.onDidDismiss((data)=>{
      console.log(data);
      if(data.result==true){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }
        this.navCtrl.parent.select(0);
      }
    })
  }
}
