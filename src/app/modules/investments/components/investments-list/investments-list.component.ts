import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { InvestmentsFacade } from "../../investments-facade";
import { Investments } from "./../../../../models/investments.model";
import { Router } from "@angular/router";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "inv-investments-list",
  templateUrl: "./investments-list.component.html",
  styleUrls: ["./investments-list.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("*", style({ opacity: 1 })),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("600ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class InvestmentsListComponent implements OnInit {
  title: string = "Investimentos - Lista";
  data$: Observable<Investments[]> = new Observable<Investments[]>();
  displayedColumns: string[] = ["nome", "objetivo", "saldoTotal"];

  constructor(private service: InvestmentsFacade, private router: Router) {}

  ngOnInit(): void {
    this.data$ = this.service.findAll();
  }

  actionDetail(data: Investments) {
    if (data.indicadorCarencia === "N")
      this.router.navigateByUrl("investments/detail", {
        state: data,
      });
  }
}
