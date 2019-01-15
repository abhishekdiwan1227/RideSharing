import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { ActiveDriver, IncomingRequest } from "../pages/driver/driver.models";
import { HttpClientWrapper } from "../wrapper/httpClientWrapper";

@Injectable()
export class RiderService {
    activeDrivers: ActiveDriver[];

    constructor(private httpClientWrapper: HttpClientWrapper) {
        this.activeDrivers = [];
    }

    addActiveDriver(activeDriver: ActiveDriver) {
        return this.httpClientWrapper.post("http://localhost:1337/driver/", activeDriver);
    }

    getActiveDrivers() {
        return this.httpClientWrapper.get("http://localhost:1337/driver/");
    }

    updateDriverLocation(activeDriver: ActiveDriver) {
        return this.httpClientWrapper.put("http://localhost:1337/driver/", activeDriver);
    }

    createIncomingRideRequest(incmoingRequest: IncomingRequest) {
        return this.httpClientWrapper.post("http://localhost:1337/driver/incoming", incmoingRequest);
    }

    getAllIncomingRequests() {
        return this.httpClientWrapper.get("http://localhost:1337/driver/incoming");
    }
}