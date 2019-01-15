import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/userService';
import { RiderService } from '../../services/riderService';
import { GoogleMapsServiceWrapper } from '../../wrapper/googleMapsServiceWrapper';

declare var google;

@Component({
    selector: 'page-ride',
    templateUrl: 'ride.html',
})
export class RidePage {

    origin: string;
    destination: string;
    myPositionMarker: any;
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    riderUsername: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private userService: UserService, private riderService: RiderService,
        public googleMapsServiceWrapper: GoogleMapsServiceWrapper) {
        this.riderUsername = navParams.get("riderUsername");
    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {
        this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.myPositionMarker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                draggable: true,
                position: this.map.getCenter()
            });
            this.myPositionMarker.bindTo('position', this.map, 'center');
            this.origin = this.myPositionMarker.position.lat() + "," + this.myPositionMarker.position.lng();
            this.getDrivers();
        });
    }

    getDrivers() {
        this.riderService.getActiveDrivers().subscribe(res => {
            res.json().forEach((driver) => {
                var marker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(driver.Coordinates.latitude, driver.Coordinates.longitude)
                });
            })
        })
    }

    gotoDestination() {
        var result = this.googleMapsServiceWrapper.GetDestinationDirectionResult(this.origin, this.destination).subscribe(res => {
            var routes = res.json().routes;
            if (routes.length > 0) {
                var destinationMarker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(routes[0].legs[0].end_location)
                });
                var originMarker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: this.myPositionMarker.getPosition()
                });
            }

            this.myPositionMarker.setMap(null);

            var bounds = new google.maps.LatLngBounds();
            bounds.extend(destinationMarker.getPosition());
            bounds.extend(this.myPositionMarker.getPosition());
            this.map.fitBounds(bounds);

            this.riderService.createIncomingRideRequest({ RiderName: this.riderUsername, Destination: this.destination }).subscribe(res => {
                console.log(res);
            });
        });
    }
}
