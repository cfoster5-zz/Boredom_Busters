//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-cherrypick',
  templateUrl: 'cherrypick.html'
})
export class CherryPickPage {

  constructor(public navCtrl: NavController) {

  }

  showsearch() {
      this.navCtrl.push(SearchPage);
  }

}
