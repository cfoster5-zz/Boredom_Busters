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
  CAT_Type;
  SUBCAT_MASTER;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CAT_Type =this.navParams.get("CAT_Type");
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
          /*if(data.length == 0)
          {
            //data is being passed here and I want to pass item instead?
            function vendorListData();
            //this.navCtrl.push(VendorListPage, data);
            console.log("subcategory name empty");
            console.log(data.length);
          }*/
          //returns how many subcategories a category has
         console.log(data.length);
          this.items = data;
          //this.ionViewDidLoad(data);
          this.vendorListData(data);


        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);

    });


  }

 /*ionViewDidLoad(){

     console.log(this.navParams.get("CAT_Type"));




  }*/

  vendorListData(data)
  {
    /*if(data.length == 1)
    {

      //this.navCtrl.push(VendorListPage, data);
      console.log(data.SUBCAT_MASTER);
      //this.selectsubcategory(data);
      this.navCtrl.push(VendorListPage);

    }*/
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

selectsubcategory(item) {
  console.log("Selected Item", item);
  this.navCtrl.push(VendorListPage,item);
}

}
