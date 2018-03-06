import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredavaciPage } from './predavaci';

@NgModule({
  declarations: [
    PredavaciPage,
  ],
  imports: [
    IonicPageModule.forChild(PredavaciPage),
  ],
})
export class PredavaciPageModule {}
