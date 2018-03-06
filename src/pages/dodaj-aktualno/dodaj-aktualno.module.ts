import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DodajAktualnoPage } from './dodaj-aktualno';

@NgModule({
  declarations: [
    DodajAktualnoPage,
  ],
  imports: [
    IonicPageModule.forChild(DodajAktualnoPage),
  ],
})
export class DodajAktualnoPageModule {}
