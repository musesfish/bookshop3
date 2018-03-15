import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { LogService }  from '../../app/utility/service/log/log.service';
import { IndexPage } from '../index/index';
import { LoginPage } from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list:Array<any>=[];
  money:number=0;
  view:any;
  index:any;
  login:any;
  orderConfirm:any;
  isB:boolean=false;
  isBs:Array<boolean>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public myhttp:myHttpService,public mylog:LogService,
   public mytoast:ToastController) {
    this.index=IndexPage;
    this.login=LoginPage;
    this.orderConfirm=OrderConfirmPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  // 进入前检查登录
  ionViewWillEnter(){
    this.checklog();
  }
  // 决定显示哪个视图
  checklog(){
    this.myhttp.sendRequest("login/session_data.php")
      .subscribe((data:any)=>{
        //console.log(data);
        if(data.uid==null){
          this.view=1;
        }else{
          this.getList();
        }
      })
  }
  // 获取数据
  getList(){
     this.myhttp.sendRequest("cart/list.php")
      .subscribe((data:any)=>{
        this.mylog.showLog(data);
        if(data.data.length==0){
          this.view=2;
         // console.log(data.data);
        }else{
          this.view=3;
          this.mylog.showLog(data.data);
          this.list=data.data;
        }
      })
  }
  // 跳去首页逛逛
  jumptoindex(){
    this.navCtrl.parent.select(0);
  }
// 更新商品数量
  add(i,b){
    if(b) this.list[i].count--;
    else this.list[i].count++;
    this.myhttp.sendRequest("cart/update.php?cid="+
    this.list[i].cid+"&count="+this.list[i].count)
      .subscribe((data:any)=>{
        console.log(data);
        let msg="";
        if(data.code=="-1"){
          msg="更新成功";
        }else if(data.code=="-2"){
          msg="移除成功";
          this.getList();
        }
        this.mytoast.create({
          position:"bottom",
          message:msg,
          duration:1500
        })
      })
  }
// 全选(没发请求)
  checkall(){
    this.isB=!this.isB;
    if(this.isB){
      for(let i=0;i<this.list.length;i++){
        this.money+=this.list[i].count*this.list[i].price;
      }
    }else{
        this.money=0;
    }
  }
//单选(没发请求)
  checksigle(i){
    let num=0;

    if(this.isBs[i]!=true) num=0;
    else num=1;

    if(num==0) this.money-=this.list[i].count*this.list[i].price;
    else this.money+=this.list[i].count*this.list[i].price;
  }
}
