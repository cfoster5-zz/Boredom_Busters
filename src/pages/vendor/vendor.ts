import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VendorListPage } from '../vendorlist/vendorlist';
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html'
})
export class VendorPage {
  VEN_Name;
  VEN_OPN;
  VEN_CLS;
  VEN_Address;
  VEN_Address2;
  VEN_City;
  VEN_State;
  VEN_Zip;
  VEN_Phone;
  VEN_Web;
  VEN_Price;
  VEN_Desc;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.VEN_Name = this.navParams.get("VEN_Name");
    this.VEN_OPN = this.navParams.get("VEN_OPN");
    this.VEN_CLS = this.navParams.get("VEN_CLS");
    this.VEN_Address = this.navParams.get("VEN_Address");
    this.VEN_Address2 = this.navParams.get("VEN_Adress2");
    this.VEN_City = this.navParams.get("VEN_City");
    this.VEN_State = this.navParams.get("VEN_State");
    this.VEN_Zip = this.navParams.get("VEN_Zip");
    this.VEN_Phone = this.navParams.get("VEN_Phone");
    this.VEN_Web = this.navParams.get("VEN_Web");
    this.VEN_Price = this.navParams.get("VEN_Price");
    this.VEN_Desc = this.navParams.get("VEN_Phone");
    console.log("SubcategoryPage",this.navParams)//url?name=value&name=value&...
   fetch('http://34.210.2.173/Subcategories.php?SUBCAT_MASTER='+this.navParams.get('CAT_ID'))
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


      console.log(this.navParams.get("VEN_Name"));
     }

  }
