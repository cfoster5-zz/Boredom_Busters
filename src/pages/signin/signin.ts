import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController) {
/*--------------vendors-----------*/
  fetch('http://34.210.2.173/Vendors.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        document.getElementById("chadd").innerHTML = data[0].VEN_Name;
        document.getElementById("chadd").innerHTML = data[0].VEN_Address;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  /*-------------categories------------*/
    fetch('http://34.210.2.173/Categories.php')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          document.getElementById("dana").innerHTML = data[0].CAT_Type;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });







  /*-------------------------*/

  }


}
