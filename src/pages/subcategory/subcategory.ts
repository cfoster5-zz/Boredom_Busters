//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { VendorListPage } from '../vendorlist/vendorlist';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'subcategory.html'
})
export class SubcategoryPage {

  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
     
   
   console.log(this.navParams.get("CAT_Type"));
  
  }  
 

  showsearch() {
      this.navCtrl.push(SearchPage);
  }

  /*subcategory = [
  'Arts',
  'Lessons',
  'Volunteer Opportunities',
  'Homeschool Interests',
  'Science and Technology',
  'Theater and Entertainment'
]; */

selectsubcategory(item: string) {
  console.log("Selected Item", item);
  this.navCtrl.push(VendorListPage);
}

}
