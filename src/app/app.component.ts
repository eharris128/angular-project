import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Beer } from './beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getBeers();
  }
  constructor(private beerService: BeerService) {}
  title = 'Belp';
  beers: Beer[];
  selectedBeer: Beer;
  beer: Beer = {
    name: 'Modelo Especial',
    abv: 4.5,
    style: 'Smooth'
  }
  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
  getBeers(): void {
    this.beerService.getBeers().then(beers => this.beers = beers)
  }
}
