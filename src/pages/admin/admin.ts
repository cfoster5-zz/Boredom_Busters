import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public navCtrl: NavController) {
/*-------------------------*/
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






  /*-------------------------*/
    /*fetch('http://34.210.2.173/Vendors.php')
    .then(
    function (data) {
    //pull dummy data from php vendors
    document.getElementById("chadd").innerHTML = data ;

    console.log('Request succeeded with JSON response', data);
  });*/

  }


}
