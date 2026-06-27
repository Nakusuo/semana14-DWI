import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector-tipo',
  templateUrl: './selector-tipo.component.html',
  styleUrls: ['./selector-tipo.component.scss'],
  standalone: false
})
export class SelectorTipoComponent {
  @Output() tipoCambiado = new EventEmitter<string>();

  cambiarTipo(tipo: string) {
    this.tipoCambiado.emit(tipo);
  }
}
