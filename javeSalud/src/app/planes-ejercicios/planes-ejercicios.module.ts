import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanesEjerciciosPage } from './planes-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesEjerciciosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanesEjerciciosPage]
})
export class PlanesEjerciciosPageModule {}
