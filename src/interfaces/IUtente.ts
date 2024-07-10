import { IMezzo } from "./IMezzo";

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamentoPreferito: string;
  prenotaMezzo(mezzo: IMezzo): void;
}
