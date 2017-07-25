import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VendorListPage } from '../vendorlist/vendorlist';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html'
})
export class VendorPage {
  VEN_Name;
  VEN_OPN;
  VEN_CLS;
  VEN_Img;
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
    this.VEN_Img = this.navParams.get("VEN_Img");
    this.VEN_Address = this.navParams.get("VEN_Address");
    this.VEN_Address2 = this.navParams.get("VEN_Address2");
    this.VEN_City = this.navParams.get("VEN_City");
    this.VEN_State = this.navParams.get("VEN_State");
    this.VEN_Zip = this.navParams.get("VEN_Zip");
    this.VEN_Phone = this.navParams.get("VEN_Phone");
    this.VEN_Web = this.navParams.get("VEN_Web");
    this.VEN_Price = this.navParams.get("VEN_Price");
    this.VEN_Desc = this.navParams.get("VEN_Desc");
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

    //split time into hours and minutes
    var OpenPart = this.VEN_OPN.split(":");
    var ClosePart = this.VEN_CLS.split(":");

    //array to store start time
    var Ohours = OpenPart[0];
    var Ominutes = OpenPart[1];
    var Osuffix = "AM";

    //array to store end time
    var Chours = ClosePart[0];
    var Cminutes = ClosePart[1];
    var Csuffix = "AM";


    //convert military time to am/pm for start time
    if (Ohours > 12) {
        Ohours = Ohours - 12;
        Osuffix = "PM";

    }
    else if (Ohours == "00") {
        Ohours = 12;
        Osuffix = "AM";
    }
    else if (Ohours == "12") {
        Osuffix = "PM";
    }

    //convert military time to am/pm for end time
    if (Chours > 12) {
        Chours = Chours - 12;
        Csuffix = "PM";

    }
    else if (Chours == "00") {
        Chours = 12;
        Csuffix = "AM";
    }
    else if (Chours == "12") {
        Csuffix = "PM";
    }

    console.log(Chours + ":" + Cminutes + " " + Csuffix);
    //assign new hours too variables
    this.VEN_OPN = Ohours + ":" + Ominutes + " " + Osuffix;
    this.VEN_CLS = Chours + ":" + Cminutes + " " + Csuffix;


    }

     showsearch() {
         this.navCtrl.push(SearchPage);
     }

  }
