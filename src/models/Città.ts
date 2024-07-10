import { ICitta } from "../interfaces/ICittà";
import { IMezzo } from "../interfaces/IMezzo";

export class Citta implements ICitta {
  constructor(public nome: string, public mezziDisponibili: IMezzo[] = []) {}

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(
      `Il mezzo ${mezzo.id} (${mezzo.tipo}) è stato aggiunto a ${this.nome}.`
    );
  }
}
