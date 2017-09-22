import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav id='nav-bar'>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/beers" routerLinkActive="active">Beers</a>
      <a routerLink='/login' routerLinkActive='active'>Login</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Belp';
}