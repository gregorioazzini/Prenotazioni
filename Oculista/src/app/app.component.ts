import { Component } from '@angular/core';
import { Appuntamento } from './appuntamento/appuntamento.model';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http'; //Importa Il modulo http
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oculista';
  appuntamento: Appuntamento[];   // <-- component property
  o : Observable<Appuntamento[]>;
constructor(public http : HttpClient)
{
   //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
   this.o = this.http.get<Appuntamento[]>('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni');
   this.o.subscribe(data => {this.appuntamento = data;});

}

  Prenota(nome:HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono:HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement) : boolean
  {

    this.appuntamento.push(new Appuntamento(nome.value, cognome.value, indirizzo.value, telefono.valueAsNumber , email.value, data.valueAsDate,  (ora.value) ))
    return false;
  }


}
