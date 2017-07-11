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

   fetch('http://34.210.2.173/Categories.php')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          document.getElementById("Cat1").innerHTML = data[0].Cat_Type;
          //this.items = data;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });


  }

  showsearch() {
      this.navCtrl.push(SearchPage);
  }

  selectcategory() {
      this.navCtrl.push(VendorListPage);
  }
  
  

}
