import { Component, Input } from '@angular/core';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-resumen-registro',
  templateUrl: './resumen-registro.component.html',
  styleUrls: ['./resumen-registro.component.scss'],
  standalone: false
})
export class ResumenRegistroComponent {
  @Input() registro: Registro = { nombre: '', correo: '', tipoApp: '' };
}
