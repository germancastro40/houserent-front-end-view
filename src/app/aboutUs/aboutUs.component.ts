import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
})
export class AboutUsComponent { }
