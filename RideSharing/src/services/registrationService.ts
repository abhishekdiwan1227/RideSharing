import { Injectable } from "@angular/core";
import { HttpClientWrapper } from "../wrapper/httpClientWrapper";

@Injectable()
export class RegistrationService {

    constructor(private httpClientWrapper: HttpClientWrapper) { }

    public registerUser() {
        this.httpClientWrapper.get("http://localhost:1337/users/registerUser").subscribe(res => console.log(res.json));
    }
}
