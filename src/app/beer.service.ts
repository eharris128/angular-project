import { Injectable } from "@angular/core";
import { Beer } from "./beer";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import "rxjs/add/operator/retry";
@Injectable()
export class BeerService {
  results: string[];

  constructor(private http: HttpClient) {}
  getBeers() {
    interface BeerResponse {
      results: object;
    }
    return (
      this.http
        .get<BeerResponse>("http://localhost:8080/beers")
        // .get<BeerResponse>("https://quiet-lake-53110.herokuapp.com/beers")
        .retry(3)
        .subscribe(
          data => {
            this.results = [];
            for (let prop in data) {
              for (let i = 0; i < data[prop].length; i++) {
                this.results.push(data[prop][i]);
              }
            }
            console.log("Results: ", this.results);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("An error occurred.", err.error.message);
            } else {
              console.log(
                `Backend returned code ${err.status}, body was ${err.error}`
              );
            }
          }
        )
    );
    // getBeers(): Promise<Beer[]> {
    //   return Promise.resolve(BEERS);
    // }
    // getBeer(id: number): Promise<Beer> {
    //   return this.getBeers().then(beers => beers.find(beer => beer.id === id));
    // }
  }
}
