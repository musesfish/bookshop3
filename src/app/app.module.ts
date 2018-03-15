import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { myHttpService }  from './utility/service/myhttp.service';
import { LogService }  from './utility/service/log/log.service';

import { CartPage } from '../pages/cart/cart';
import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { LoginPage } from '../pages/login/login';
import { NotFoundPage } from '../pages/not-found/not-found';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { PayPage } from '../pages/pay/pay';
import { UserCenterPage } from '../pages/user-center/user-center';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    DetailPage,
    HomePage,
    IndexPage,
    LoginPage,
    NotFoundPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    DetailPage,
    HomePage,
    IndexPage,
    LoginPage,
    NotFoundPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    myHttpService,
    LogService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
