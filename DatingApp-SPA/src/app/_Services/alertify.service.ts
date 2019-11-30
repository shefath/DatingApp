import { Injectable } from "@angular/core";
import * as alertify from "alertifyjs";
@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}
  confirm(messages: string, okCallback: () => any) {
    alertify.confirm(messages, (e: any) => {
      if (e) {
        okCallback();
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }
}
