//ADD PAGES HERE TO CREATE TABS
import { Component } from '@angular/core';

import { CouponsPage } from '../coupons/coupons';
import { CherryPickPage } from '../cherrypick/cherrypick';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//ADD tab_Root = _____Page; TO CREATE TABS
  tab1Root = HomePage;
  tab2Root = CouponsPage;
  tab3Root = CherryPickPage;
  tab4Root = MorePage;

  constructor() {

  }
}
