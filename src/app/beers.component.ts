import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Beer } from './beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'my-beers',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})
export class BeersComponent implements OnInit {
  ngOnInit(): void {
    this.getBeers();
  }
  constructor(private beerService: BeerService) {}
  beers: Beer[];
  selectedBeer: Beer;
  beer: Beer = {
    name: 'Modelo Especial',
    abv: 4.5,
    style: 'Smooth',
    id: 1
  }
  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
  getBeers(): void {
    this.beerService.getBeers().then(beers => this.beers = beers)
  }
}
