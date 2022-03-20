import { Component, OnInit } from "@angular/core";

@Component({
  selector: "inv-investments-list",
  templateUrl: "./investments-list.component.html",
  styleUrls: ["./investments-list.component.scss"],
})
export class InvestmentsListComponent implements OnInit {
  title: string = "Investment - List";

  constructor() {}

  ngOnInit(): void {}
}
