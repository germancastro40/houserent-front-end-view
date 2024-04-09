import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BeneficiosCardComponent } from './beneficiosCard/beneficiosCard.component';
import { ServicesCardComponent } from './servicesCard/servicesCard.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ReservasComponent } from './reservas/reservas.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    BeneficiosCardComponent,
    ServicesCardComponent,
    FooterComponent,
    ReservasComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent{
   


}
