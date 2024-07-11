## Travel

Travel è un'applicazione TypeScript progettata per gestire il noleggio di mezzi di trasporto in una città. Permette agli utenti di prenotare mezzi come biciclette, scooter e monopattini, e consente alle città di gestire la disponibilità di questi mezzi.

## Caratteristiche principali

- Gestione dei mezzi: Aggiungi, rimuovi e aggiorna lo stato dei mezzi disponibili in una città.
- Prenotazione: Gli utenti possono prenotare mezzi disponibili.
- Assegnazione: I mezzi prenotati vengono assegnati agli utenti.

## Struttura del progetto

- Il progetto è strutturato nel seguente modo:

  - src/interfaces: Contiene le interfacce TypeScript per definire la struttura degli oggetti.
  - ICitta.ts: Definisce la struttura di una città.
  - IMezzo.ts: Definisce la struttura di un mezzo.
  - IUtente.ts: Definisce la struttura di un utente.

- src/models: Contiene le classi che implementano le interfacce.
  - Citta.ts: Implementa la classe Citta.
  - Mezzo.ts: Implementa la classe Mezzo.
  - Utente.ts: Implementa la classe Utente.
- src/Test.ts: Contiene il codice per testare l'applicazione.

##Installazione

**Clonare il repository**

`git clone https://github.com/tuo-utente/moove-micro-mobility.git`

**Installare le dipendenze**

Assicurati di avere Node.js e npm installati. Poi, esegui :

`npm install`

**Eseguire l'applicazione**

`npm start`
