//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { Couponsimg } from '../couponsimg/couponsimg';

@Component({
  selector: 'page-coupons',
  templateUrl: 'coupons.html'
})
export class CouponsPage {

//empty arrays
coupons = [];
vendors = [];

constructor(public navCtrl: NavController/*, public navParams: NavParams*/) {

 fetch('http://34.210.2.173/Vendors.php')
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


  fetch('http://34.210.2.173/Coupons.php')
   .then((response) => {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }
       // Examine the text in the response
       response.json().then((data) => {
         console.log(/*"Coupons",*/data);
         //document.getElementById("CPNDesc").innerHTML = data[0].CPN_Desc;
         this.coupons = data;


       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });

   for(var v in this.vendors){
console.log("made it in");
   this.vendors[v].VEN_ID = new Array<{}>();

   for(var c in this.coupons){

       if(this.vendors[v].VEN_ID == this.coupons[c].CPN_Master){
           this.navCtrl.push(CouponsPage, this.coupons[c].CPN_Desc);
       }
    }

   }


}



  showsearch() {
      this.navCtrl.push(SearchPage);
  }

  selectvendorcoupon(vendor) {
      this.navCtrl.push(Couponsimg, vendor);
  }

}
