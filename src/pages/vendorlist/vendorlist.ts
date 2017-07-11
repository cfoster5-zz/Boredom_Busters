//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { VendorPage } from '../vendor/vendor';

@Component({
  selector: 'page-vendorlist',
  templateUrl: 'vendorlist.html'
})
export class VendorListPage {

  constructor(public navCtrl: NavController) {

  }

  items = [
  'Pokémon Yellow',
  'Super Metroid',
  'Mega Man X',
  'The Legend of Zelda',
  'Pac-Man',
  'Super Mario World',
  'Street Fighter II',
  'Half Life',
  'Final Fantasy VII',
  'Star Fox',
  'Tetris',
  'Donkey Kong III',
  'GoldenEye 007',
  'Doom',
  'Fallout',
  'GTA',
  'Halo'
];

selectvendor(item: string) {
  console.log("Selected Item", item);
  this.navCtrl.push(VendorPage);
}

}
