//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-coupons',
  templateUrl: 'couponsimg.html'
})
export class Couponsimg {

CPN_Desc;
coupons = [];

constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.CPN_Desc =this.navParams.get("CPN_Desc");
  console.log("Couponsimg",this.navParams)
  fetch('http://34.210.2.173/Coupons.php?CPN_MASTER='+this.navParams.get('VEN_ID'))
   .then((response) => {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }
       // Examine the text in the response
       response.json().then((data) => {
         //console.log("Coupons",data);
         //document.getElementById("CPNDesc").innerHTML = data[0].CPN_Desc;
         this.coupons = data;
       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });


}
ionViewDidLoad(){


  console.log(this.navParams.get("CPN_Desc"));

 }


  showsearch() {
      this.navCtrl.push(SearchPage);
  }


}
