import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // 👈 Asegúrate de que esté importado arriba

import { DetallePageRoutingModule } from './detalle-routing.module';
import { DetallePage } from './detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // 👈 Deja el IonicModule aquí para que el HTML reconozca <ion-header>, etc.
    DetallePageRoutingModule
  ],
  declarations: [
    DetallePage // 👈 ¡PÁSALO DE VUELTA AQUÍ!
  ]
})
export class DetallePageModule {}