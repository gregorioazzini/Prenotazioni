import { Time } from '@angular/common';


export class Appuntamento {
  Nome: string ;
  Cognome: string;
  Indirizzo: string;
  Telefono: number;
  Email: string;
  DataPrenotazione: Date;
  OraPrenotazione: String;

  constructor(Nome: string, Cognome: string, Indirizzo: string, Telefono: number, Email: string, DataPrenotazione: Date, OraPrenotazione: String) {
    this.Nome = Nome;
    this.Cognome = Cognome;
    this.Indirizzo = Indirizzo;
    this.Telefono = Telefono;
    this.Email = Email;
    this.DataPrenotazione = DataPrenotazione;
    this.OraPrenotazione = OraPrenotazione;
  }



}
