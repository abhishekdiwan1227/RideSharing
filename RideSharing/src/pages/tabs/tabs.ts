import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { RidePage } from '../ride/ride';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = RidePage;
    tab2Root: any = ProfilePage;
    riderUsername: any;

    constructor(public navParams: NavParams) {
        this.riderUsername = this.navParams.data;
    }
}
