import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_Services/user.service";
import { Observable, of } from "rxjs";
import { AlertifyService } from "../_Services/alertify.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError(error => {
        this.alertify.error("Problem Retriving Data");
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
