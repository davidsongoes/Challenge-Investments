import { Shares } from "./shares.model";

export interface Investments {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: Shares[];
}
