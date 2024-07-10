import { Mezzo } from "./models/Mezzo";
import { Utente } from "./models/Utente";
import { Citta } from "./models/Città";

// Istanziare mezzi
const bici1 = new Mezzo("bici", "B001");
const scooter1 = new Mezzo("scooter", "S001");
const monopattino1 = new Mezzo("monopattino", "M001");

// Istanziare utenti
const utente1 = new Utente(
  "Mario",
  "Rossi",
  "mario.rossi@example.com",
  "carta di credito"
);
const utente2 = new Utente(
  "Luigi",
  "Verdi",
  "luigi.verdi@example.com",
  "paypal"
);

// Istanziare città
const citta1 = new Citta("Milano");

// Aggiungere mezzi alla città
citta1.aggiungiMezzo(bici1);
citta1.aggiungiMezzo(scooter1);
citta1.aggiungiMezzo(monopattino1);

// Prenotare mezzi
utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(bici1);
utente2.prenotaMezzo(scooter1);
