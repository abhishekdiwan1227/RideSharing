import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { RidePage } from '../ride/ride';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = RidePage;
  tab2Root: any = ProfilePage;

  constructor() {

  }
}
