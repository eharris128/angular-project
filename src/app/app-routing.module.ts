import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeersComponent } from "./beers.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  {
    path: "beers",
    component: BeersComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "detail/:id",
    component: BeerDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}