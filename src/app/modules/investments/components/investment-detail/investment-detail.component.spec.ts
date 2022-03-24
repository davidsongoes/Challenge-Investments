import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InvestmentsFacade } from "./../../investments-facade";
import { OverlayModule } from "@angular/cdk/overlay";
import { RouterTestingModule } from "@angular/router/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";

import { InvestmentDetailComponent } from "./investment-detail.component";
import { Location } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

describe("InvestmentDetailComponent", () => {
  let component: InvestmentDetailComponent;
  let fixture: ComponentFixture<InvestmentDetailComponent>;
  let location: Location;
  const data = {
    indicadorCarencia: "N",
    nome: "INVESTIMENTO I",
    objetivo: "Minha aposentadoria",
    saldoTotal: 39321.29,
    acoes: [
      { id: "1", nome: "Banco do Brasil (BBAS3)", percentual: 28.1 },
      { id: "2", nome: "Vale (VALE3)", percentual: 20.71 },
      { id: "3", nome: "Petrobras (PETR4)", percentual: 21.63 },
      { id: "4", nome: "Cemig (CMIG3)", percentual: 12.41 },
      { id: "5", nome: "Oi (OIBR3)", percentual: 17.15 },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        OverlayModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
      ],
      providers: [FormBuilder, InvestmentsFacade],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDetailComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    spyOn(location, "getState").and.returnValue(data);
    component.data = location.getState();
    fixture.detectChanges();
  });

  it("must create investment detail", () => {
    expect(component).toBeTruthy();
  });

  it("must get data location", () => {
    expect(location.getState()).toEqual(data);
  });
});
