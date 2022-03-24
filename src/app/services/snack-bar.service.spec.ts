import { OverlayModule } from "@angular/cdk/overlay";
import { TestBed } from "@angular/core/testing";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarService } from "./snack-bar.service";

describe("SnackBarService", () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [MatSnackBar],
    });
    service = TestBed.inject(SnackbarService);
  });

  it("must be created snackbar", () => {
    expect(service).toBeTruthy();
  });
});
