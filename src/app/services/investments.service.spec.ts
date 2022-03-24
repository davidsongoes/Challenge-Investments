import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { InvestmentsService } from "./investments.service";

describe("InvestmentsService", () => {
  let service: InvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(InvestmentsService);
  });

  it("must be created investment", () => {
    expect(service).toBeTruthy();
  });
});
