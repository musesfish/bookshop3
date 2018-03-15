import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { LogService }  from '../../app/utility/service/log/log.service';
import { NotFoundPage } from '../not-found/not-found';
import { LoginPage } from '../login/login';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart:any;
  notfound:any;
  bid:number;
  detail:Array<any>=[];
  piclist:Array<any>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public myhttp:myHttpService,public mylog:LogService ,
    public toastCtrl:ToastController ) {
      this.notfound=NotFoundPage;
      this.cart=CartPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.bid=this.navParams.get('bid');
    console.log(this.bid);
    this.myhttp.sendRequest("product_details/product_details.php?bid="+this.bid)
      .subscribe((data:any)=>{
          this.detail=data;
          for(let i=0;i<3;i++){
            this.piclist.push(data.md);
          }
          //console.log(this.detail);
          //console.log(this.piclist);
      })
  }

  addcart(){
    this.myhttp.sendRequest("cart/add.php?bid="+this.bid)
    .subscribe((data:any)=>{
      this.mylog.showLog(data);
      let showMsg=""
      if(data.code==300){
        this.navCtrl.push(LoginPage);
      }else{
        showMsg="添加成功";
      }
      let mytoast=this.toastCtrl.create({
          message:showMsg,
          duration:1500,
          position:"bottom"
      })
      mytoast.present();
    })
  }
}
