// a-service
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    isDev:boolean=true;
    constructor() { }
    showLog(msg:string){
        if(this.isDev){
            console.log(msg);
        }
    }
}