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
    {nome:'marte',immagine:'https://img.freepik.com/premium-photo/3d-illustration-planet-mars-isolated-black-night-sky-image-elements-furnished-by-nasa_510958-640.jpg',sistemasolare:'sistema solare',durata:'0,00003',postopartenza:'terra',datapartenza:'27 gennaio 2234',dataarrivo:'29 aprile 2234',costoeconomy:'93.000',costo:'433.000 '},
    {nome:'saturno',immagine:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1SN0maLOcqGnZjmweWD1JKLaTY6yqEHTvQ_mdQwyWA&s',sistemasolare:'sistema solare',durata:'0,0923',postopartenza:'marte',datapartenza:'30 aprile 2234',dataarrivo:'30 aprile 2242',costoeconomy:'93000000000 ',costo:'93000000000000000000 '},
    {nome:'sole',immagine:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyIT2F72l5YWfQJDA3RTB_vjq6x5zZs9bSD07hkx4pz1NEN8wNw7y2cTUFipDDWjDEXQ&usqp=CAU',sistemasolare:'sistema solare',durata:'0,151',postopartenza:'saturno',datapartenza:'31 aprile 2242',dataarrivo:'31 aprile 2256',costoeconomy:'153000000000',costo:'132000000000000000 '},
    {nome: 'urano',immagine:'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTVHW1or6B0_fkJJ5fviiGtYvaczOnN30J-m6T_FltmJE5G7Yc9hPE7YC1Yho9CCvJg',sistemasolare:'sistema solare',durata:'2,81',postopartenza:'sole',datapartenza:'2 maggio 2256',dataarrivo:'24 novembre 3309.',costoeconomy:'1234000000000000',costo:'43000000000000000'},
    {nome: 'titano',immagine:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UnuCgFct3MG8arr5f2ueyrl6yptCb8wc6i3OvH44MQ&s',sistemasolare:'sistema solare',durata:'1',postopartenza:'urano',datapartenza:'25 novembre 3309',dataarrivo:'25 novembre 3310',costoeconomy:'634000000000',costo:'2243000000000000000'},
    {nome: 'plutone',immagine:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/260px-Pluto_in_True_Color_-_High-Res.jpg',sistemasolare:'sistema solare',durata:'0,029',postopartenza:'titano',datapartenza:'26 novembre 3310',dataarrivo:' 6 dicembre 3310',costoeconomy:'234000000000',costo:'082000000000000000'},
    {nome: 'ROXs 42 Rb',immagine:'https://exoplanets.nasa.gov/assets/content/planets/gasgiant.jpg',sistemasolare:'fascia di Kuiper',durata:'5,86',postopartenza:'plutone',datapartenza:'7 dicembre 3310 ',dataarrivo:'4 dicembre 3368',costoeconomy:'1132000000000000000 ',costo:'2300000000000000000'},

  ]
}

