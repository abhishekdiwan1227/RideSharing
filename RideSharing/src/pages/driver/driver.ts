import { Component } from '@angular/core';
import { NavController, NavParams, isActivatable } from 'ionic-angular';
import { RiderService } from '../../services/riderService';
import { Geolocation } from '@ionic-native/geolocation';
import { ActiveDriver } from './driver.models';

@Component({
    selector: 'page-driver',
    templateUrl: 'driver.html'
})
export class DriverPage {

    isActive: boolean;
    driverUsername: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private riderService: RiderService, private geolocation: Geolocation) {
        this.driverUsername = navParams.get("driverUsername");
    }

    switchDriverActive() {
        if (this.isActive) {
            this.geolocation.getCurrentPosition().then((position => {
                //console.log(position);
                var activeDriver: ActiveDriver = { Name: this.driverUsername, Coordinates: position.coords };
                this.riderService.addActiveDriver(activeDriver).subscribe(res => {
                    console.log("OK");
                });
            }));
        }
    }

}
