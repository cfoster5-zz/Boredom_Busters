//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SearchPage } from '../search/search';
import { VendorPage } from '../vendor/vendor';

@Component({
  selector: 'page-cherrypick',
  templateUrl: 'cherrypick.html'
})
export class CherryPickPage {

  vendors = [];
  VEN_Cherry;

  constructor(public navCtrl: NavController) {
//get VEN_NAME where VEN_CHERRY = 1
    fetch('http://34.210.2.173/Vendors.php?VEN_Cherry=1')
     .then((response) => {
         if (response.status !== 200) {
           console.log('Looks like there was a problem. Status Code: ' +
             response.status);
           return;
         }
         // Examine the text in the response
         response.json().then((data) => {
           console.log(/*"Vendors",*/data);
           //document.getElementById("VENName").innerHTML = data[0].VEN_Name;
           //document.getElementById("VENIMG").innerHTML = data[0].VEN_Img;
           this.vendors = data;
         });
       }
     )
     .catch(function(err) {
       console.log('Fetch Error :-S', err);
     });

  }

  ionViewDidLoad(){

    console.log("VEN_Name");


  }


  showsearch() {
      this.navCtrl.push(SearchPage);
  }

  selectcherryvendor(vendor) {
      this.navCtrl.push(VendorPage, vendor);
  }

}
