import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, FlexLayoutModule, SharedModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
