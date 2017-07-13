import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


//ADD PAGES HERE
import { CouponsPage } from '../pages/coupons/coupons';
import { CherryPickPage } from '../pages/cherrypick/cherrypick';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MorePage } from '../pages/more/more';
import { SignInPage } from '../pages/signin/signin';
import { SearchPage } from '../pages/search/search';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { VendorListPage } from '../pages/vendorlist/vendorlist';
import { VendorPage } from '../pages/vendor/vendor';
import { Couponsimg } from '../pages/couponsimg/couponsimg'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//ADD PAGES HERE
@NgModule({
  declarations: [
    MyApp,
    CouponsPage,
    CherryPickPage,
    HomePage,
    TabsPage,
    MorePage,
    SignInPage,
    SearchPage,
    SubcategoryPage,
    VendorListPage,
    VendorPage,
    Couponsimg
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  //ADD PAGES HERE
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CouponsPage,
    CherryPickPage,
    HomePage,
    TabsPage,
    MorePage,
    SignInPage,
    SearchPage,
    SubcategoryPage,
    VendorListPage,
    VendorPage,
    Couponsimg
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
