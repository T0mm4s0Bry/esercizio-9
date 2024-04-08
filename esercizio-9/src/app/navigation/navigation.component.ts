import { Component,Output,EventEmitter } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from '../introduction/introduction.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [IntroductionComponent, CommonModule, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
 
  controllo:boolean=true;

  biglietto(){
    this.controllo=false
    this.mandaDatiEvento.emit(this.controllo);
  }

  home(){
    this.controllo=true
    this.mandaDatiEvento.emit(this.controllo);
  }
  @Output() mandaDatiEvento = new EventEmitter<boolean>();


 nome = 'Giorgio';


 
   

}
