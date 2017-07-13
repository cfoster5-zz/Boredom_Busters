//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
//from is html page
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SubcategoryPage } from '../subcategory/subcategory';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {



  //empty arrays
  categories = [];



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
<<<<<<< HEAD

  selectcategory(item) {
    console.log("selectcategory",item);
      this.navCtrl.push(SubcategoryPage,item);


  }


=======
    // Possibly going to have to write a function for each category, or one function w/ conditions 
  selectcategory1() {
      let item = this.categories[0];
        this.navCtrl.push(SubcategoryPage, item);
    }
 selectcategory2() {
      let item = this.categories[1];
        this.navCtrl.push(SubcategoryPage, item);
    }
selectcategory3() {
      let item = this.categories[2];
        this.navCtrl.push(SubcategoryPage, item);
    }
selectcategory4() {
      let item = this.categories[3];
        this.navCtrl.push(SubcategoryPage, item);
    }
selectcategory5() {
      let item = this.categories[4];
        this.navCtrl.push(SubcategoryPage, item);
    }
selectcategory6() {
      let item = this.categories[5];
        this.navCtrl.push(SubcategoryPage, item);
    }
>>>>>>> origin/master

}
