import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  error(message: string) {
    return this._snackBar.open(message, "Fechar", {
      panelClass: ["snackbar-error"],
      duration: 5000,
    });
  }

  success(message: string) {
    return this._snackBar.open(message, "Fechar", {
      panelClass: ["snackbar-success"],
      duration: 5000,
    });
  }

  info(message: string) {
    return this._snackBar.open(message, "Fechar", {
      panelClass: ["snackbar-info"],
      duration: 5000,
    });
  }
}
