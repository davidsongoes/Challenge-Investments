import { Shares } from "./../../../../models/shares.model";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "inv-investment-detail",
  templateUrl: "./investment-detail.component.html",
  styleUrls: ["./investment-detail.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("*", style({ opacity: 1 })),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("600ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class InvestmentDetailComponent implements OnInit {
  title: string = "Investimentos - Resgate Personalizado";
  displayedColumns: string[] = ["nome", "saldoAcumulado", "saldoResgatar"];
  data: any;
  form: FormGroup = this.fb.group({
    resgates: this.fb.array([]),
  });
  valorTotal = 0;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.data = this.location.getState();
    if (this.data?.navigationId !== 1) {
      const resgatesFormArray = this.resgates;
      this.data.acoes.forEach((acao: Shares) => {
        resgatesFormArray.push(this.createResgateFormGroup(acao.percentual));
      });
      this.form.patchValue({
        resgates: this.data.acoes,
      });

      this.form.get("resgates")?.valueChanges.subscribe((val) => {
        let soma = 0;
        this.resgates.controls.forEach((control) => {
          this.valorTotal = soma += Number(control.value.saldoResgatar);
        });
      });
    } else {
      this.router.navigate([""]);
    }
    console.log(this.data);
  }

  get resgates() {
    return <FormArray>this.form.get("resgates");
  }

  createResgateFormGroup(percentual: number): FormGroup {
    let valorResgateMaximo = this.calculateSaldoAcumulado(percentual);
    return this.fb.group({
      id: [],
      nome: [],
      percentual: [],
      saldoResgatar: ["", Validators.max(valorResgateMaximo)],
    });
  }

  calculateSaldoAcumulado(percentualAcao: number): number {
    let saldoAcumulado = (percentualAcao / 100) * this.data.saldoTotal;
    return saldoAcumulado;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
