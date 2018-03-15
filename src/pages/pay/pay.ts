import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController,ToastController,
  LoadingController} from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  totalPrice=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public myView:ViewController,public myload:LoadingController,public mytoast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
    this.totalPrice=this.navParams.get("price");
  }

  closeModal(b:boolean){
      this.myView.dismiss({result:b});
  }

  load(){
      let load=this.myload.create({
          content:"支付中...",
          // duration:3000
      })
      load.present();
      setTimeout(()=>{
          load.dismiss();
          this.toast();
      },3000)
  }   
  toast(){
      let toast=this.mytoast.create({
        position:"bottom",
        message:'支付成功'
      });
      toast.present();
      setTimeout(()=>{
          toast.dismiss();
          this.closeModal(true);
      },1000)
  }
  
}
