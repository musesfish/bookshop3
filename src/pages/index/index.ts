import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { DetailPage } from '../detail/detail';
import { ListPage } from '../list/list';

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  carousel:Array<any>=[];
  newArrival:Array<any>=[];
  recommended:Array<any>=[];
  mydetail:any;
  val:string;

  constructor(public myhttp:myHttpService ,public navCtrl: NavController, 
   public navParams: NavParams) {
     this.mydetail=DetailPage;
  }

  ionViewWillEnter(){
    this.val="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.getData();
  }

  getData(){
    this.myhttp.sendRequest("index/index.php")
      .subscribe((data:any)=>{
          //console.log(data);
          this.carousel=data.banners;
          this.newArrival=data.new_arrival;
          this.recommended=data.recommended;
      })
  }

  jumptolist(val:any){
    this.navCtrl.push(ListPage,{keyword:this.val,pno:0});
    // this.navCtrl.push(ListPage,{keyword:val.target.value,pno:1});
  }
}
