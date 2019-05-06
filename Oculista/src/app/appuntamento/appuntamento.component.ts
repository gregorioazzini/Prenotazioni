import { Component, OnInit, Input } from '@angular/core';
import { Appuntamento } from './appuntamento.model';

@Component({
  selector: 'app-appuntamento',
  templateUrl: './appuntamento.component.html',
  styleUrls: ['./appuntamento.component.css']
})
export class AppuntamentoComponent implements OnInit {
  @Input() appuntamento: Appuntamento[];
  constructor() { }

  ngOnInit() {
  }

}
