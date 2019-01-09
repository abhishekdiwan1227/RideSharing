import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http"

@Injectable()
export class HttpClientWrapper {

    requestOptions: RequestOptions;

    constructor(private http: Http) {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.requestOptions = new RequestOptions({ headers: headers });
    }

    public get(url) {
        return this.http.get(url, this.requestOptions);
    }

    public post(url, body) {
        return this.http.post(url, body, this.requestOptions);
    }
}