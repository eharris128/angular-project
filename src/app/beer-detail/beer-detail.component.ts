import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
console.log('Beer', Beer);

@Component({
  selector: 'beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
// implements OnInit
export class BeerDetailComponent  {
  @Input() beer: Beer;
  // constructor() { }

  // ngOnInit() {
  // }

}
