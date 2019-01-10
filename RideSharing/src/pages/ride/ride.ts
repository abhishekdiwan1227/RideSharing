import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserService } from '../../services/userService';

declare var google;

@Component({
    selector: 'page-ride',
    templateUrl: 'ride.html',
})
export class RidePage {

    destination: string;
    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private userService: UserService) { }

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
            let myPositionMarker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                draggable: true,
                position: this.map.getCenter()
            });
            myPositionMarker.bindTo('position', this.map, 'center');
        })
    }   
}
