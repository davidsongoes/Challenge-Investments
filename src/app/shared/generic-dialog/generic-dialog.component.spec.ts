import { SanitizeHtmlPipe } from "./../pipes/sanitize-html.pipe";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GenericDialogComponent } from "./generic-dialog.component";

describe("GenericDialogComponent", () => {
  let component: GenericDialogComponent;
  let fixture: ComponentFixture<GenericDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [GenericDialogComponent, SanitizeHtmlPipe],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("must create generic dialog", () => {
    expect(component).toBeTruthy();
  });
});
