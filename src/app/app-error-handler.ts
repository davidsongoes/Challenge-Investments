import { Injectable, ErrorHandler, Injector, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { SnackbarService } from "./services/snack-bar.service";
@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.message;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 0:
            this.injector
              .get(SnackbarService)
              .error(
                "Favor verificar a URL do endpoint ou a sua conexão com a internet"
              );
            break;
          case 403:
            this.injector.get(SnackbarService).error(message);
            break;
          case 404:
            this.injector.get(SnackbarService).error(message);
            break;
          case 500:
            this.injector.get(SnackbarService).error(errorResponse.error);
            break;
          case 400:
            this.injector.get(SnackbarService).error(errorResponse.error);
            break;
        }
      });
    }
  }
}
