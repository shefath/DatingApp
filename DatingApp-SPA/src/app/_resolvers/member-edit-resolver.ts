import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_Services/user.service";
import { Observable, of } from "rxjs";
import { AlertifyService } from "../_Services/alertify.service";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_Services/auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error("Problem Retriving your Profile Data");
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
