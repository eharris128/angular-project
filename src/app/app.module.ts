import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule }    from '@angular/http';

import { AppComponent } from "./app.component";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeersComponent } from "./beers.component";
import { BeerService } from "./beer.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {}