import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Beer } from "./beer";
import { BeerService } from "./beer.service";

@Component({
  selector: "my-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.css"],
  providers: [BeerService]
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;

  constructor(private beerService: BeerService, private router: Router) {}

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
