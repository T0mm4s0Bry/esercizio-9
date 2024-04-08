import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  biglietti=[
    {nome:'marte',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome:'saturno',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome:'sole',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome: 'urano',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome: 'titano',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome: 'plutone',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},
    {nome: 'ROXs 42 Rb',immagine:'',sistemasolare:'',durata:'',postopartenza:'',datapartenza:'',dataarrivo:'',costo:''},

  ]
}

