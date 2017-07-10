import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';


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

}
