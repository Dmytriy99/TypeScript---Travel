import { IUtente } from "../interfaces/IUtente";
import { IMezzo } from "../interfaces/IMezzo";

export class Utente implements IUtente {
  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoDiPagamentoPreferito: string
  ) {}

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
    } else {
      console.log(`Il mezzo ${mezzo.id} (${mezzo.tipo}) non è disponibile.`);
    }
  }
}
