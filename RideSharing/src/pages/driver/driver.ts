import { Component } from '@angular/core';
import { NavController, NavParams, isActivatable } from 'ionic-angular';
import { RiderService } from '../../services/riderService';
import { Geolocation } from '@ionic-native/geolocation';
import { ActiveDriver, IncomingRequest } from './driver.models';

@Component({
    selector: 'page-driver',
    templateUrl: 'driver.html'
})
export class DriverPage {

    incomingRequests: IncomingRequest[];
    isActive: boolean;
    driverUsername: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private riderService: RiderService, private geolocation: Geolocation) {
        this.driverUsername = navParams.get("driverUsername");
    }

    switchDriverActive() {
        if (this.isActive) {
            this.geolocation.getCurrentPosition().then((position => {
                var activeDriver: ActiveDriver = { Name: this.driverUsername, Coordinates: position.coords };
                this.riderService.addActiveDriver(activeDriver).subscribe(res => {
                });
            }));

            this.geolocation.watchPosition().subscribe(position => {
                this.riderService.updateDriverLocation({ Name: this.driverUsername, Coordinates: position.coords });
            });

            this.riderService.getAllIncomingRequests().subscribe(res => {
                console.log(res.json());
                this.incomingRequests = res.json();
            })

        }
    }

}
