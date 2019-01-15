import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http"

@Injectable()
export class GoogleMapsServiceWrapper {

    requestOptions: RequestOptions;

    constructor(private http: Http) {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.requestOptions = new RequestOptions({ headers: headers });
    }

    public GetDestinationDirectionResult(origin, destination) {
        return this.http.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyD4CIwCztOeC-V-JT1n5Ja6dxA0ZxpQ_oE`);
    }
}