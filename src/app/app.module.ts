import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MyFirstComponentComponent } from "./my-first-component/my-first-component.component";

@NgModule({
  declarations: [AppComponent, MyFirstComponentComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
