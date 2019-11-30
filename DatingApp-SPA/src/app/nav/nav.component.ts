import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../_Services/auth.service";
import { AlertifyService } from "../_Services/alertify.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = { username: "", password: "" };

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success("Logged in Successfully");
        this.model.username = "";
        this.model.password = "";
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  loggedin() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem("token");
    // return !!token;
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.message("Logged Out");
  }
}
