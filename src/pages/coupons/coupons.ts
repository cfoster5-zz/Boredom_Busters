//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-coupons',
  templateUrl: 'coupons.html'
})
export class CouponsPage {

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
        document.getElementById("VENIMG").innerHTML = data[0].VEN_Img;

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  fetch('http://34.210.2.173/Coupons.php')
   .then((response) => {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }
       // Examine the text in the response
       response.json().then((data) => {
         console.log(data);
         document.getElementById("CPNDesc").innerHTML = data[0].CPN_Desc;

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

}
