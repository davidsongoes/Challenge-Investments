import { GenericDialogComponent } from "./../../../../shared/generic-dialog/generic-dialog.component";
import { GenericDialogModel } from "./../../../../shared/generic-dialog/generic.model";
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
import { MatDialog } from "@angular/material/dialog";
import { take } from "rxjs";

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
  valorTotal: number = 0;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    public dialog: MatDialog
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
      this.form.get("resgates")?.valueChanges.subscribe(() => {
        let soma = 0;
        this.resgates.controls.forEach((control) => {
          this.valorTotal = soma += Number(control.value.saldoResgatar);
        });
      });
    } else {
      this.router.navigate([""]);
    }
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

  openDialog(dataDialog: GenericDialogModel) {
    this.dialog.open(GenericDialogComponent, {
      data: dataDialog,
    });
    this.dialog.afterAllClosed.pipe(take(1)).subscribe(() => {
      if (this.form.valid) {
        this.router.navigate([""]);
      }
    });
  }

  afterClosedDialog() {
    this.dialog._getAfterAllClosed();
  }

  verifyControlErrors() {
    let textSharesErrorName: string = "";
    let textSharesErrorValue: string = "";
    let textSharedError: string = "";
    this.resgates.controls.map((group: any) => {
      if (group.get("saldoResgatar").errors) {
        textSharesErrorName = `<p><strong>${
          group.get("nome").value
        }</strong><span>: O valor a resgatar não pode ser maior que `;
        textSharesErrorValue = `${group.get("saldoResgatar").errors.max.max}`;
        textSharedError +=
          textSharesErrorName +
          Number(textSharesErrorValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        +`</span></p><br>`;
      }
    });
    return textSharedError;
  }

  onSubmit() {
    let textShareError = this.verifyControlErrors();
    if (this.form.invalid) {
      this.openDialog({
        title: "DADOS INVÁLIDOS!",
        content: `<p>Você preencheu um ou mais campos com um valor acima do permitido:</p><br>`,
        content2: `${textShareError}.`,
        buttonTitle: "Corrigir",
      });
    } else {
      this.openDialog({
        title: "Resgate efetuado com sucesso!",
        content: `Valor Resgatado: ${Number(this.valorTotal).toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          }
        )}`,
        content2: ``,
        buttonTitle: "Novo Resgate",
      });
    }
  }
}
