//PUT PAGES HERE THAT YOU WANT TO GO TO OR ARE PULLING FROM
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../signin/signin';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController) {

  }

//USE .push TO STACK AND GET BACK BUTTON OR .setRoot TO WORK AS NEW PAGE
  signintools() {
      this.navCtrl.push(SignInPage);
  }

}
