import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Beer } from "./beer";
import { BeerService } from "./beer.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import "rxjs/add/operator/retry";

@Component({
  selector: "my-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.css"],
  providers: [BeerService]
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;
  results: string[];

  constructor(
    private beerService: BeerService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getBeers();
    interface BeerResponse {
      results: object;
    }
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
      );
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }

  getBeers(): void {
    this.beerService.getBeers().then(beers => (this.beers = beers));
  }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedBeer.id]);
  }
}
