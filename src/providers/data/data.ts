import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
    items = [];
    constructor() {
    
   fetch('http://34.210.2.173/Vendors.php')
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

    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.VEN_Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
}
