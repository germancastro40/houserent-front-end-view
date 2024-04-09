
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-frecuently-questions',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
  ],
  templateUrl: './frecuentlyQuestions.component.html',
  styleUrl: './frecuentlyQuestions.component.css',
})
export class FrecuentlyQuestionsComponent { 
  email:string = 'houserentadm@gmail.com'
}
