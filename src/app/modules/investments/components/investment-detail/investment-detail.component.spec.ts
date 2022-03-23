import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { InvestmentDetailComponent } from "./investment-detail.component";

describe("InvestmentDetailComponent", () => {
  let component: InvestmentDetailComponent;
  let fixture: ComponentFixture<InvestmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentDetailComponent],
      imports: [RouterModule, HttpClientModule],
      providers: [MAT_DIALOG_DATA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
