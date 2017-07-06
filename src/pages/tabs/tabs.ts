import { Component } from '@angular/core';

import { CouponsPage } from '../coupons/coupons';
import { CherryPickPage } from '../cherrypick/cherrypick';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { AdminPage } from '../admin/admin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CouponsPage;
  tab3Root = CherryPickPage;
  tab4Root = MorePage;
  tab5Root = AdminPage;

  constructor() {

  }
}
