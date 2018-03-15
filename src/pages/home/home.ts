import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { CartPage } from '../cart/cart';
import { UserCenterPage } from '../user-center/user-center';
import { OrderConfirmPage } from '../order-confirm/order-confirm';
// import { NotFoundPage } from '../not-found/not-found';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tabindex:any;
  tabcart:any;
  tabusercenter:any;
  orderconfirm:any;
  // notfound:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabindex=IndexPage;
    this.tabcart=CartPage;
    this.tabusercenter=UserCenterPage;
    this.orderconfirm=OrderConfirmPage;
    // this.notfound=NotFoundPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
