import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredavacPage } from './predavac';

@NgModule({
  declarations: [
    PredavacPage,
  ],
  imports: [
    IonicPageModule.forChild(PredavacPage),
  ],
})
export class PredavacPageModule {}
