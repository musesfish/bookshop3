import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { myHttpService } from '../../app/utility/service/myhttp.service';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  keyword:string="";
  pno:number;
  list:Array<any>=[];
  mydetail:any;
  pageCount:number;

  constructor(public myhttp:myHttpService ,public navCtrl: NavController, 
    public navParams: NavParams) {
      this.mydetail=DetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.keyword=this.navParams.get("keyword");
    this.pno=this.navParams.get("pno");
    this.getData();
  }

  getData(){
    this.myhttp.sendRequest("products/products.php?pno="+
    this.pno+"&kw="+this.keyword)
      .subscribe((data:any)=>{
        this.list=data.data;
        console.log(this.list);
        this.pageCount=data.pageCount;
      })
  }

  myinfinite(infinite){
    this.pno++;
    console.log(this.pno);
    if(this.pno<=this.pageCount){
     this.myhttp.sendRequest("products/products.php?pno="+
      this.pno+"&kw="+this.keyword)
      .subscribe((data:any)=>{
        this.list=this.list.concat(data.data);
         console.log(this.list);
          // 结束刷新动作
        infinite.complete();
      })
    }
  }
}
