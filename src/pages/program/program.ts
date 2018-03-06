import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
import { DaniProvider } from '../../providers/dani/dani';
/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  programi;
  dani;
  daniOrdered;
  loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ProgramProvider: ProgramProvider, private DaniProvider: DaniProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();

  	this.ProgramProvider.getPrograms().subscribe(data => {


        this.programi = data;
        this.loader.dismiss();
  	})
    this.DaniProvider.getDani().subscribe(data => {
        this.dani = data;
        this.daniOrdered = this.dani.slice().reverse();
         console.log(this.dani)
        this.loader.dismiss();
    })

}
    presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }
  showDetailedProgram(danProgram) {
    this.navCtrl.push("ProgramDetaljnoPage", {danProgram: danProgram})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

}


