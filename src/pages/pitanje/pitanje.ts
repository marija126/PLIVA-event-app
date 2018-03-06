import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
/**
 * Generated class for the PitanjePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pitanje',
  templateUrl: 'pitanje.html',
})
export class PitanjePage {
predavaciProgram;
predavac
pitanje_za_predavaca;
autor;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProgramProvider: ProgramProvider) {
  	this.predavaciProgram = this.navParams.get('predavaciProgram');
  }
addPitanje(){
	console.log(this.pitanje_za_predavaca)
	this.ProgramProvider.postPitanje(this.predavac, this.pitanje_za_predavaca, this.autor).subscribe(data => {
	
	})
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PitanjePage');
  }

}
