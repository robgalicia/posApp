import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListComandaPage } from './list-comanda.page';
import { RegistroComandaPageModule } from 'src/app/modal/registro-comanda/registro-comanda.module';
import { RegistroComandaPage } from '../../modal/registro-comanda/registro-comanda.page';
import { DetalleComandaPage } from '../../modal/detalle-comanda/detalle-comanda.page';
import { DetalleComandaPageModule } from 'src/app/modal/detalle-comanda/detalle-comanda.module';

const routes: Routes = [
  {
    path: '',
    component: ListComandaPage
  }
];

@NgModule({
  entryComponents: [
    RegistroComandaPage,
    DetalleComandaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RegistroComandaPageModule,
    DetalleComandaPageModule
  ],
  declarations: [ListComandaPage]
})
export class ListComandaPageModule {}
