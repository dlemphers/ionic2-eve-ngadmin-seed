import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {environment} from '../environment';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getCustomers(): Observable<any[]> {

    let headers = new Headers();
    headers.append("Cache-Control", "no-cache")

    return this.http.get(
      environment.API_HOST + "/customers",
      {
        headers: headers
      }
    )
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._items || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log("Error fired ", JSON.stringify(error));
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
