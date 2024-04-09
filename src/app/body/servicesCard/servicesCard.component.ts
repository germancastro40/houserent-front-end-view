import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule, } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

interface servicesArray{
  titulo: string,
  parrafo: string,
  img?:string
}

@Component({
  selector: 'body-services-card',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    CarouselModule,
  ],
  templateUrl: './servicesCard.component.html',
  styleUrl: './servicesCard.component.css',
})
export class ServicesCardComponent implements OnInit{

  servicesOptions:servicesArray[] = [
    {
      titulo: 'ADMINISTRACION Y GESTION DE PERFIL',
      parrafo: 'Nos encargamos de que el perfil de tu propiedad se destaque entre los demas, logrando generar mas visualizaciones y reservas',
      img: 'assets/imgServices/marketingPersonalizado.png'
    },
    {
      titulo: 'GESTION DE RESERVAS',
      parrafo: 'Nos comunicaremos con tu huésped en cualquier idioma y con total disponibilidad y gestionaremos las reservas a través de Airbnb y Booking.',
      img: 'assets/imgServices/asistencia.png'
    },
    {
      titulo: 'SERVICIO DE FOTOGRAFIA',
      parrafo: 'Nuestro fotógrafo especializado en la fotografía de interiores y arquitectura, resalta los aspectos más destacados de tu alojamiento',
      img: 'assets/imgServices/fotografias.png'
    },
    {
      titulo: 'CHECK-IN / CHECK-OUT',
      parrafo: 'Con nuestro servicio de check-in y check-out nos encargamos de coordinar la llegada de tus huéspedes, proporcionarles las llaves y mostrarles las comodidades de tu propiedad. ',
      img: 'assets/imgServices/conciergeVirtual.png'
    },
    {
      titulo: 'SERVICIO DE LIMPIEZA',
      parrafo: 'nos encargamos de cada detalle, desde la limpieza profunda de las superficies hasta la atención meticulosa a los baños y la reposición de suministros básicos.',
      img: 'assets/imgServices/servicioLimpieza.png'
    },
    {
      titulo: 'ACTUALIZACION DE TARIFAS',
      parrafo: '¡No dejes dinero sobre la mesa con tarifas estáticas! Déjanos implementar nuestra estrategia de precios inteligentes para que puedas maximizar tus ingresos y alcanzar todo el potencial de tu propiedad',
      img: 'assets/imgServices/gestionDePrecios.jpg'
    },
    {
      titulo: 'MANTENIMIENTO DE TU PROPIEDAD',
      parrafo: 'Nuestro servicio de mantenimiento abarca desde reparaciones menores y gestión de emergencias que se puedan presentar durante la reserva y estancia del huésped.',
      img: 'assets/imgServices/limpieza.png'
    },
    {
      titulo: 'GESTION DE PAGOS',
      parrafo: 'El servicio de pago de facturas te brinda la tranquilidad de saber que todas las facturas se pagaran puntualmente',
      img: 'assets/imgServices/pago-facturas.png'
    }
  ]

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }




 }
