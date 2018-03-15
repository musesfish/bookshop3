import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController} from 'ionic-angular';


@Injectable()
export class myHttpService {
    constructor(private http: Http,public myload:LoadingController) { }
    // 向myUrl对应服务器发起请求
    sendRequest(myUrl:string){
        let load=this.myload.create({
            content:"正在通信"
        })
        load.present();
        //return this.http.get('http://localhost/myApp/myApp/data/'+myUrl,{withCredentials:true})
        //return this.http.get('http://bsapp.applinzi.com/data/'+myUrl,{withCredentials:true})
        return this.http.get('http://localhost/github-pages/bookshop3/bookshop3/data/'+myUrl,{withCredentials:true})	
            .map((response:Response)=>{
                load.dismiss();
                return response.json()
            });
    }
}