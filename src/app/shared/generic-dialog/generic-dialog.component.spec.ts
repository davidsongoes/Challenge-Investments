import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GenericDialogComponent } from "./generic-dialog.component";

describe("GenericDialogComponent", () => {
  let component: GenericDialogComponent;
  let fixture: ComponentFixture<GenericDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [],
      declarations: [GenericDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
