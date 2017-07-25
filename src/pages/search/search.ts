import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VendorPage } from '../vendor/vendor';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchTerm: string = '';
  vendors = [];
  items: any;

  //items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {

  fetch('http://34.210.2.173/Vendors.php')
   .then((response) => {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }
       // Examine the text in the response
       response.json().then((data) => {
         console.log(data);
        // document.getElementById().innerHTML = data[0].VEN_Name;
         this.vendors = data;

       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });


  }
  ionViewDidLoad() {
    this.setFilteredItems();



  }

    setFilteredItems(){

      this.vendors = this.dataService.filterItems(this.searchTerm);


    }



    selectvendor(vendor) {
        this.navCtrl.push(VendorPage, vendor);
    }


}
