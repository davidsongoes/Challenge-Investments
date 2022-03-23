import { InvestmentDetailComponent } from "./components/investment-detail/investment-detail.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestmentsListComponent } from "./components/investments-list/investments-list.component";

const routes: Routes = [
  {
    path: "",
    component: InvestmentsListComponent,
  },
  {
    path: "detail",
    component: InvestmentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentsRoutingModule {}
