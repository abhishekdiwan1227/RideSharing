import { Injectable } from "@angular/core";
import { HttpClientWrapper } from "../wrapper/httpClientWrapper";

@Injectable()
export class UserService {

    constructor(private httpClientWrapper: HttpClientWrapper) { }

    public registerUser(registrationModel) {
        return this.httpClientWrapper.post("http://localhost:1337/users/registerUser", registrationModel);
    }

    public authenticateUser(loginModel) {
        return this.httpClientWrapper.post("http://localhost:1337/users/authenticateUser", loginModel);
    }
}
