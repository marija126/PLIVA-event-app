import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AktualnoProvider } from '../providers/aktualno/aktualno';
import { HttpClientModule } from '@angular/common/http';
import { ProgramProvider } from '../providers/program/program';
import { DaniProvider } from '../providers/dani/dani';

import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, Transfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AktualnoProvider,
    ProgramProvider,
    DaniProvider
  ]
})
export class AppModule {}
