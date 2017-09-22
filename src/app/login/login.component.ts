import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model = new User(1, "www@www.com", "1234");
  values = "";
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  constructor() {}

  ngOnInit() {
    console.log("My user: ", this.model);
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  // onKey(value: string) {
  //   this.values += value + ' | ';
  // }
}
