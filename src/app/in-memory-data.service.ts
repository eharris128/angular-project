import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const beers = [
      { name: "Modelo Especial", abv: 4.5, style: "Smooth", id: 0 },
      { name: "Devil Dog", abv: 7.2, style: "Bitter", id: 1 },
      { name: "Budweiser", abv: 5.0, style: "Heavy", id: 2 }
    ];
    return { beers };
  }
}
