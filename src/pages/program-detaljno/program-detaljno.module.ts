import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramDetaljnoPage } from './program-detaljno';

@NgModule({
  declarations: [
    ProgramDetaljnoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramDetaljnoPage),
  ],
})
export class ProgramDetaljnoPageModule {}
