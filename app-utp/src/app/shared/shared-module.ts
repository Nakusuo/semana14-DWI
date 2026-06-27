import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumenRegistroComponent } from '../components/resumen-registro/resumen-registro.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';

@NgModule({
  declarations: [
    ResumenRegistroComponent,
    SelectorTipoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ResumenRegistroComponent,
    SelectorTipoComponent
  ]
})
export class SharedModule {}
