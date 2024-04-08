import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NavigationComponent, ListComponent, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

}
