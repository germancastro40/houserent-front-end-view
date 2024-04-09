import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = []
  activeItem: MenuItem | undefined;

  ngOnInit(): void {
    this.menuItems = [
      { label: 'inicio', routerLink: '/', icon: 'pi pi-fw pi-home' },
      { label: 'sobre nosotros', routerLink: '/about-us', icon: 'pi pi-fw pi-info-circle' },
      // { label: 'clientes', routerLink: '/clientes', icon: 'pi pi-fw pi-user' },
      { label: 'contacto', routerLink: '/contactanos', icon: 'pi pi-fw pi-phone' },
      { label: 'preguntas frecuentes', routerLink: '/preguntas-frecuentes', icon: 'pi pi-fw pi-question-circle' },
    ]
    this.activeItem = this.menuItems
  }





}
