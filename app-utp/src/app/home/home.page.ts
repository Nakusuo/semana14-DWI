import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // 👈 Importamos el Router aquí arriba

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false, // Mantenemos el componente clásico vinculado a su módulo
})
export class HomePage {
  enviado = false;

  // Definición de la estructura del formulario reactivo
  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    tipoApp: ['', Validators.required],
  });

  // Unificamos las dependencias en un solo constructor
  constructor(
    private fb: FormBuilder,
    private router: Router // 👈 Inyectamos el Router
  ) {}

  // Getter para acceder fácilmente a los controles en el HTML (f.nombre, f.correo, etc.)
  get f() {
    return this.registroForm.controls;
  }

  // Método principal que valida el formulario y navega a la siguiente página
  validarRegistro() {
    this.enviado = true;

    // Si el formulario no cumple las validaciones, marca todo como tocado para mostrar los errores
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    // Si todo está correcto, imprimimos en consola y redirigimos pasando la data
    console.log('Registro válido, redirigiendo...', this.registroForm.value);
    
    this.router.navigate(['/detalle'], {
      queryParams: this.registroForm.value
    });
  }
}
