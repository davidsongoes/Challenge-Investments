import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, Observable, take, tap } from "rxjs";
import { Investments } from "../models/investments.model";

@Injectable({
  providedIn: "root",
})
export class InvestmentsService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.API}`;

  findAll(): Observable<Investments[]> {
    return this.http.get<Investments[]>(this.endpoint).pipe(
      map((r: any) => r.response.data.listaInvestimentos),
      take(1)
    );
  }
}
