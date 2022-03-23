import { GenericDialogModel } from "./generic.model";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "inv-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.scss"],
})
export class GenericDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GenericDialogModel) {}
}
