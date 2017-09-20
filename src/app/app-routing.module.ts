import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
// import { BeersComponent } from "./beers.component";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// const routes: Routes = [
// {
// path: "beers",
// component: BeersComponent
// },
// {
// path: "dashboard",
// component: DashboardComponent
// },
// {
// path: "",
// redirectTo: "/dashboard",
// pathMatch: "full"
// },
// {
// path: "detail/:id",
// component: BeerDetailComponent
// }
// ];
// @NgModule({
// imports: [ RouterModule.forRoot(routes) ],
// exports: [ RouterModule ]
// })
// export class AppRoutingModule {}