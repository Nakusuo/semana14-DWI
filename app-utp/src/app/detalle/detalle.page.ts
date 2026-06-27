import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../models/registro';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {
  registro: Registro = { nombre: '', correo: '', tipoApp: '' };
  tipoActual = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['nombre']) {
        this.registro = {
          nombre: params['nombre'],
          correo: params['correo'],
          tipoApp: params['tipoApp']
        };
        this.tipoActual = this.registro.tipoApp;
      }
    });
  }

  actualizarTipo(nuevoTipo: string) {
    this.tipoActual = nuevoTipo;
    this.registro.tipoApp = nuevoTipo;
  }
}