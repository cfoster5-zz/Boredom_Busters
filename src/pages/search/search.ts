import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VendorPage } from '../vendor/vendor';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  vendors = [];

  //items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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


    //getvendors(ev) {
    getvendors(vendors) {
    //getvendors(data) {
      // Reset vendors back to all of the items
      this.vendors;

      // set val to the value of the ev target
      //var val = ev.target.value;
      var val = vendors.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.vendors = this.vendors.filter((vendors) => {
        
          //return (vendor.toLowerCase().indexOf(val.toLowerCase()) > -1);
          return (JSON.stringify(vendors));
          //eturn (JSON.stringify(data));
        })
      }
    }


    selectvendor(vendor) {
        this.navCtrl.push(VendorPage, vendor);
    }


}
