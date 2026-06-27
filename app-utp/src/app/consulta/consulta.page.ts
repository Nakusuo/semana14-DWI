import { Component, OnInit } from '@angular/core';
import { RegistroApiService } from '../services/registro-api';
import { Registro } from '../models/registro';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: false
})
export class ConsultaPage implements OnInit {
  registros: Registro[] = [];
  cargando = false;
  error = '';

  constructor(private api: RegistroApiService) {}

  ngOnInit() {
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.cargando = true;
    this.error = '';

    this.api.listarRegistros().subscribe({
      next: (data) => {
        this.registros = data;
      },
      error: (err) => {
        console.error('Error al cargar registros:', err);
        this.error = 'Error al cargar los registros';
        this.cargando = false;
      },
      complete: () => {
        this.cargando = false;
      }
    });
  }

  refrescar(event: any) {
    this.cargarRegistros();
    event.target.complete();
  }
}
