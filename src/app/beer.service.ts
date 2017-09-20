import { Injectable } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './mock-beers';

@Injectable()
export class BeerService {
  getBeers(): Promise<Beer[]> {
    return Promise.resolve(BEERS);
  }
}