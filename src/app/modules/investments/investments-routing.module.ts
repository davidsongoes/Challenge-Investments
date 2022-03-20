import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestmentsListComponent } from "./components/investments-list/investments-list.component";

const routes: Routes = [
  {
    path: "",
    component: InvestmentsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentsRoutingModule {}
