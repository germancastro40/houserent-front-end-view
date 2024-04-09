import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule, } from 'primeng/card';

@Component({
  selector: 'body-beneficios-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
  ],
  templateUrl: './beneficiosCard.component.html',
  styleUrl: './beneficiosCard.component.css',
})
export class BeneficiosCardComponent { }
