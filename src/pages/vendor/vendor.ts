import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html'
})
export class VendorPage {
  VEN_Name;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.VEN_Name =this.navParams.get("VEN_Name");
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
