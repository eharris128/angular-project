import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule }   from '@angular/router';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeersComponent } from "./beers.component";
import { BeerService } from "./beer.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

// App Routing modules produces error: app-routing.module.ts is not a module.

// import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: BeerDetailComponent
      },
      {
        path: 'beers',
        component: BeersComponent
      }
    ])
  // AppRoutingModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})

export class AppModule {}