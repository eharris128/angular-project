import { Injectable } from "@angular/core";
import { Beer } from "./beer";

import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class BeerService {
  private beersUrl = "api/beers";
  constructor(private http: Http) {}
  getBeers(): Promise<Beer[]> {
    return this.http
      .get(this.beersUrl)
      .toPromise()
      .then(response => response.json().data as Beer[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getBeer(id: number): Promise<Beer> {
    const url = `${this.beersUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Beer)
      .catch(this.handleError);
  }
}
