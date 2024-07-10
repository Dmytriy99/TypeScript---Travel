import { IMezzo } from "../interfaces/IMezzo";
import { IUtente } from "../interfaces/IUtente";

export class Mezzo implements IMezzo {
  constructor(
    public tipo: "bici" | "scooter" | "monopattino",
    public id: string,
    public stato: "disponibile" | "in uso" = "disponibile"
  ) {}

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(
        `Il mezzo ${this.id} (${this.tipo}) è stato assegnato a ${utente.nome} ${utente.cognome}.`
      );
    } else {
      console.log(`Il mezzo ${this.id} (${this.tipo}) non è disponibile.`);
    }
  }
}
