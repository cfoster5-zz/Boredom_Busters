//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { VendorPage } from '../vendor/vendor';

@Component({
  selector: 'page-vendorlist',
  templateUrl: 'vendorlist.html'
})
export class VendorListPage {
  SUBCAT_NAME;
  SUBCAT_ID;
  SUBCAT_MASTER;
  items = [];
   constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.SUBCAT_NAME =this.navParams.get("SUBCAT_NAME");
    console.log("VendorListPage",this.navParams)//url?name=value&name=value&...
   fetch('http://34.210.2.173/Vendors.php?SUBCAT_ID='+this.navParams.get('SUBCAT_MASTER'))
    .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          //console.log(data);

          this.items = data;

        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);

    });


  }
   ionViewDidLoad(){


   console.log(this.navParams.get("SUBCAT_NAME"));

  }

selectvendor(item) {
  console.log("Selected Item", item);
  this.navCtrl.push(VendorPage, item);
}

}
