import { InvestmentsFacade } from "./investments-facade";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvestmentsRoutingModule } from "./investments-routing.module";
import { InvestmentsListComponent } from "./components/investments-list/investments-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InvestmentDetailComponent } from "./components/investment-detail/investment-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [InvestmentsListComponent, InvestmentDetailComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule,
  ],
  providers: [InvestmentsFacade],
})
export class InvestmentsModule {}
