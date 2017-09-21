import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Beer } from "./beer";
import { BeerService } from "./beer.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.css"],
  providers: [BeerService]
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;
  results: object;

  constructor(
    private beerService: BeerService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getBeers();
    interface BeerResponse {results: object}
    this.http
      .get("https://quiet-lake-53110.herokuapp.com/beers")
      .subscribe(data => {
        console.log(typeof data);
      });
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
