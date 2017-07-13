import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html'
})
export class VendorPage {

  items = [];
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
         document.getElementById("VENName").innerHTML = data[0].VEN_Name;

         //this.items = data;
       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });

  }



}
