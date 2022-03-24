import { Investments } from "./../../../../models/investments.model";
import { MatDialog } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { InvestmentsFacade } from "./../../investments-facade";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InvestmentsListComponent } from "./investments-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { of, toArray } from "rxjs";
import { SharedModule } from "src/app/shared/shared.module";

describe("InvestmentsListComponent", () => {
  let component: InvestmentsListComponent;
  let fixture: ComponentFixture<InvestmentsListComponent>;
  let InvestmentsSpyFacade: any;
  const response = [
    {
      nome: "INVESTIMENTO I",
      objetivo: "Minha aposentadoria",
      saldoTotal: 39321.29,
      indicadorCarencia: "N",
      acoes: [
        {
          id: "1",
          nome: "Banco do Brasil (BBAS3)",
          percentual: 28.1,
        },
        {
          id: "2",
          nome: "Vale (VALE3)",
          percentual: 20.71,
        },
        {
          id: "3",
          nome: "Petrobras (PETR4)",
          percentual: 21.63,
        },
        {
          id: "4",
          nome: "Cemig (CMIG3)",
          percentual: 12.41,
        },
        {
          id: "5",
          nome: "Oi (OIBR3)",
          percentual: 17.15,
        },
      ],
    },
    {
      nome: "INVESTIMENTO II",
      objetivo: "Viajem dos sonhos",
      saldoTotal: 7300,
      indicadorCarencia: "N",
      acoes: [
        {
          id: "1",
          nome: "Banco do Brasil (BBAS3)",
          percentual: 35.81,
        },
        {
          id: "2",
          nome: "Vale (VALE3)",
          percentual: 26.42,
        },
        {
          id: "3",
          nome: "Petrobras (PETR4)",
          percentual: 37.77,
        },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        InvestmentsFacade,
        { provide: MAT_DIALOG_DATA, useClass: MatDialog },
      ],
      imports: [HttpClientModule, RouterTestingModule, SharedModule],
      declarations: [InvestmentsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsListComponent);
    component = fixture.componentInstance;
    InvestmentsSpyFacade = TestBed.get(InvestmentsFacade);
    fixture.detectChanges();
  });

  it("must create investment list", () => {
    expect(component).toBeTruthy();
  });

  it("must be able execute findAll()", () => {
    const spy = spyOn(InvestmentsSpyFacade, "findAll").and.returnValue(
      of(response)
    );
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    component.data$.subscribe((investments) => {
      expect(investments.length).toEqual(2);
    });
  });
});
