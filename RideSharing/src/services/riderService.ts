import { Injectable } from "@angular/core";
import { ActiveDriver } from "../pages/driver/driver.models";
import { HttpClientWrapper } from "../wrapper/httpClientWrapper";

@Injectable()
export class RiderService {
    activeDrivers: ActiveDriver[];
    map: any;

    constructor(private httpClientWrapper: HttpClientWrapper) {
        this.activeDrivers = [];
    }

    addActiveDriver(activeDriver: ActiveDriver) {
        return this.httpClientWrapper.post("http://localhost:1337/driver/", activeDriver);
    }

    getActiveDrivers() {
        return this.httpClientWrapper.get("http://localhost:1337/driver/");
    }
}