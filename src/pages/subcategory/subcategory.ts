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
         //console.log(data.length);
          this.items = data;



        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);

    });


  }

  /*vendorListData(item)
  {
    this.navCtrl.push(VendorListPage, item);
  }*/

 ionViewDidLoad(){
   //this.items is the subcategory array
   /*if (this.navParams.get("SUBCAT_MASTER") != this.navParams.get("CAT_ID"))
   {
     this.navCtrl.push(VendorListPage,item);

   }
   else {*/
     console.log(this.navParams.get("CAT_Type"));

  // }
  /*if (this.items = null)
    {
      alert("array doesnt exists");
      this.navCtrl.push(VendorListPage, item);
    }
    else {
      alert("array exists");
      alert(this.item.SUBCAT_MASTER);
      console.log(this.navParams.get("CAT_Type"));
    }*/
    ///////////////////////////////////////
    /*if (this.SUBCAT_MASTER = 1)
      {
        alert("array doesnt exists");
        this.navCtrl.push(VendorListPage, item);
      }
      else {
        alert("array exists");
        //alert(this.item.SUBCAT_MASTER);
        console.log(this.navParams.get("CAT_Type"));
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
