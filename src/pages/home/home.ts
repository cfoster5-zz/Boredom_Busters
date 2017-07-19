//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
//from is html page
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SubcategoryPage } from '../subcategory/subcategory';
import { VendorListPage } from '../vendorlist/vendorlist';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {



  //empty arrays
  categories = [];
  SUBCAT_MASTER;


  constructor(public navCtrl: NavController, public navParams: NavParams) {


this.SUBCAT_MASTER =this.navParams.get("SUBCAT_MASTER");
   fetch('http://34.210.2.173/Categories.php')
    .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);
         // document.getElementById("Cat1").innerHTML = data[0].Cat_Type;

          this.categories = data;


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
    // Possibly going to have to write a function for each category, or one function w/ conditions
  selectcategory(category) {
      //let item = this.categories[0];
      //if category has a subcategory
      //if CAT_ID of category object does not equal
    /*  if (this.categories = null)
      {
        alert("array doesnt exists");
        this.navCtrl.push(VendorListPage, category);
      }
      else {
        alert("array exists")
        this.navCtrl.push(SubcategoryPage, category);
      }*/
      /*if (this.SUBCAT_MASTER = "1")
        {
          alert("array doesnt exists");
          //category = item;
          this.navCtrl.push(VendorListPage, category);
        }
        else {
          alert("array exists");
          this.navCtrl.push(SubcategoryPage, category);
          //alert(this.item.SUBCAT_MASTER);

        }*/
      this.navCtrl.push(SubcategoryPage, category);

      //if category doesnt have a subcategory
        //this.navCtrl.push(VendorListPage, category);
    }

}
