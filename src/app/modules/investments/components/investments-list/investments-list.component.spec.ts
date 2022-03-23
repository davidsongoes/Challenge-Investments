import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { InvestmentsFacade } from "./../../investments-facade";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InvestmentsListComponent } from "./investments-list.component";

describe("InvestmentsListComponent", () => {
  let component: InvestmentsListComponent;
  let fixture: ComponentFixture<InvestmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [InvestmentsFacade],
      imports: [HttpClientModule, RouterModule],
      declarations: [InvestmentsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
