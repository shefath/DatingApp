import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";

import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_Services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_Services/error.interceptor";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
