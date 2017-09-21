import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeersComponent } from "./beers.component";
import { BeerService } from "./beer.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {}