import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GenericDialogComponent } from "./generic-dialog/generic-dialog.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html.pipe";

@NgModule({
  declarations: [GenericDialogComponent, SanitizeHtmlPipe],
  imports: [CommonModule, MaterialModule, OverlayModule, FlexLayoutModule],
  exports: [MaterialModule, GenericDialogComponent, SanitizeHtmlPipe],
})
export class SharedModule {}
