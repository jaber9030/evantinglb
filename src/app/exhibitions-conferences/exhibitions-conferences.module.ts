import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExhibitionsConferencesPage } from './exhibitions-conferences.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitionsConferencesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExhibitionsConferencesPage]
})
export class ExhibitionsConferencesPageModule {}
