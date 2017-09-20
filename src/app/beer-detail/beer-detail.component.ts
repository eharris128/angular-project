import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Beer } from "../beer";
import { BeerService } from "../beer.service";

@Component({
  selector: "beer-detail",
  templateUrl: "./beer-detail.component.html",
  styleUrls: ["./beer-detail.component.css"]
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;
  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.beerService.getBeer(+params.get("id"))
      )
      .subscribe(beer => (this.beer = beer));
  }
  goBack(): void {
    this.location.back();
  }
}
