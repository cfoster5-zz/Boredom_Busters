//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { VendorListPage } from '../vendorlist/vendorlist';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  items;

  constructor(public navCtrl: NavController) {

  }

  showsearch() {
      this.navCtrl.push(SearchPage);
  }

  selectcategory() {
      this.navCtrl.push(VendorListPage);
  }

}
