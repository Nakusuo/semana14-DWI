import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from '../models/registro';
import { RegistroApiService } from '../services/registro-api'; // <-- Importar local

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  registroForm: FormGroup;
  enviado = false;
  cargando = false;
  mensaje = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: RegistroApiService // <-- Inyectar servicio
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      tipoApp: ['', Validators.required] // Usamos tipoApp
    });
  }

  ngOnInit() {}

  get f() {
    return this.registroForm.controls;
  }

  limpiarMensajes() {
    this.mensaje = '';
    this.error = '';
  }

  // Versión mejorada con API
  guardarEnNube() {
    this.enviado = true;
    this.limpiarMensajes();

    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    const registro = this.registroForm.value as Registro;

    this.api.guardarRegistro(registro).subscribe({
      next: (resp) => {
        this.mensaje = resp.mensaje || 'Registro guardado correctamente.';
        this.router.navigate(['/detalle'], { queryParams: registro });
      },
      error: () => {
        this.error = 'No se pudo conectar con el endpoint. Verifica tu conexión.';
        this.cargando = false;
      },
      complete: () => {
        this.cargando = false;
      }
    });
  }

  // Método legacy (mantener para compatibilidad)
  validarRegistro() {
    this.guardarEnNube();
  }
}
