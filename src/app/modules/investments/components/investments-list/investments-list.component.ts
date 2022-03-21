import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { InvestmentsFacade } from "../../investments-facade";
import { Investments } from "./../../../../models/investments.model";

@Component({
  selector: "inv-investments-list",
  templateUrl: "./investments-list.component.html",
  styleUrls: ["./investments-list.component.scss"],
})
export class InvestmentsListComponent implements OnInit {
  title: string = "Investment - List";
  data: Observable<Investments[]> = new Observable<Investments[]>();
  displayedColumns: string[] = ["nome", "objetivo", "saldoTotal"];

  constructor(private service: InvestmentsFacade) {}

  ngOnInit(): void {
    this.data = this.service.findAll();
  }
}
