import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // 👈 Asegúrate de que esté importado arriba

import { DetallePageRoutingModule } from './detalle-routing.module';
import { DetallePage } from './detalle.page';
import { SharedModule } from '../shared/shared-module'; // 👈 Importar SharedModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // 👈 Deja el IonicModule aquí para que el HTML reconozca <ion-header>, etc.
    DetallePageRoutingModule,
    SharedModule // 👈 Agregar SharedModule
  ],
  declarations: [
    DetallePage // 👈 ¡PÁSALO DE VUELTA AQUÍ!
  ]
})
export class DetallePageModule {}