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
