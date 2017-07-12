import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VendorPage } from '../vendor/vendor';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  items;

  constructor(public navCtrl: NavController) {

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
         this.items = data;

       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });


  }


    getItems(ev) {
      // Reset items back to all of the items
      this.items();

      // set val to the value of the ev target
      var val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }


    selectvendor() {
        this.navCtrl.push(VendorPage);
    }


}
