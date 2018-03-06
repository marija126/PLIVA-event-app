import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PitanjePage } from './pitanje';

@NgModule({
  declarations: [
    PitanjePage,
  ],
  imports: [
    IonicPageModule.forChild(PitanjePage),
  ],
})
export class PitanjePageModule {}
