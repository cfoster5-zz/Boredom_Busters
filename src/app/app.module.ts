import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CouponsPage } from '../pages/coupons/coupons';
import { CherryPickPage } from '../pages/cherrypick/cherrypick';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MorePage } from '../pages/more/more';
import { AdminPage } from '../pages/admin/admin';
import { VendorListPage } from '../pages/vendorlist/vendorlist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CouponsPage,
    CherryPickPage,
    HomePage,
    TabsPage,
    MorePage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CouponsPage,
    CherryPickPage,
    HomePage,
    TabsPage,
    MorePage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
