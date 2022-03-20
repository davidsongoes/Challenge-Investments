import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "investments", pathMatch: "full" },
  {
    path: "investments",
    loadChildren: () =>
      import("./modules/investments/investments.module").then(
        (m) => m.InvestmentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
