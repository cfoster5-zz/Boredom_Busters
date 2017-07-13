//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SubcategoryPage } from '../subcategory/subcategory';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    
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
          this.items = data;
          
  
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
  selectcategory() {
  /*  let data = {
      title: "test title",
      desc: "test desc",
     subcat: [
        "subcat1",
        "subcat2"
        ]  
    }; */
      let item = this.items[0];
        this.navCtrl.push(SubcategoryPage, item);

      
  }



}
