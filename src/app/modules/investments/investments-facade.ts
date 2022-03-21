import { Investments } from "./../../models/investments.model";
import { InvestmentsService } from "./../../services/investments.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InvestmentsFacade {
  constructor(private service: InvestmentsService) {}

  findAll(): Observable<Investments[]> {
    return this.service.findAll();
  }
}
