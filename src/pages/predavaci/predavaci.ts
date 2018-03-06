import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
/**
 * Generated class for the PredavaciPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-predavaci',
  templateUrl: 'predavaci.html',
})
export class PredavaciPage {
predavaci;
loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ProgramProvider: ProgramProvider, public loadingCtrl: LoadingController) {
  	this.presentLoading();
 	this.ProgramProvider.getPredavaci().subscribe(dataPredavaci => {


        this.predavaci = dataPredavaci;
        console.log(this.predavaci)
        this.loader.dismiss();
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PredavaciPage');
  }
    presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }
    openPredavac(predavac) {
    this.navCtrl.push("PredavacPage", {predavac: predavac})
  }
}
