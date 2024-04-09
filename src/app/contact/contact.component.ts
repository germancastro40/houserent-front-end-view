import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './ContactService.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  private fb = inject(FormBuilder)
  private contactService = inject(ContactService)

  emailPatter: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"

  public myForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPatter)]],
    telefono: ['', Validators.required],
    mensaje: ['', Validators.required]
  })

  getFieldError(field: string): string | null {

    if (this.myForm.controls[field].untouched) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'pattern':
          return `El formato del correo que ingreso no es valido`;
      }
    }

    return null;
  }

  enviarEmail() {

    const { nombre, email, telefono, mensaje } = this.myForm.value
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched
    }

    this.contactService.sendEmail(nombre, email, mensaje, telefono)
    .subscribe({
      error: () => {
          Swal.fire({
            title: 'Listo',
            text: 'Ya tenemos tus datos, en lo más pronto posible nos pondremos en contacto para agendar una cita',
            icon: 'success',
            timer: 5000
          });
          this.myForm.reset({
            nombre: '',
            email: '',
            mensaje: '',
            telefono: ''
          });
      }
    });

  }


}
