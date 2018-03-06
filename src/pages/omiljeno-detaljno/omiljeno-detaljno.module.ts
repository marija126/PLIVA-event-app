import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OmiljenoDetaljnoPage } from './omiljeno-detaljno';

@NgModule({
  declarations: [
    OmiljenoDetaljnoPage,
  ],
  imports: [
    IonicPageModule.forChild(OmiljenoDetaljnoPage),
  ],
})
export class OmiljenoDetaljnoPageModule {}
