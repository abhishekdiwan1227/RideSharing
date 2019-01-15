import { GoogleMapsLatLng } from "ionic-native";
import { Geoposition, Coordinates } from "@ionic-native/geolocation";

export class ActiveDriver {
    Name: string;
    Coordinates: Coordinates
}

export class IncomingRequest {
    RiderName: string;
    Destination: string;
}