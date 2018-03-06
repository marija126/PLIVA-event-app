import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OmiljenoDetaljnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-omiljeno-detaljno',
  templateUrl: 'omiljeno-detaljno.html',
})
export class OmiljenoDetaljnoPage {
	danProgram;
	predavaciProgram;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.danProgram = this.navParams.get('danProgram');
  	 this.predavaciProgram = [];
      let object = this.danProgram.predavaci;
      Object.keys(object).map((key)=> {
          
      });
      for (var key in object) {
    	this.predavaciProgram.push(object[key]);
      }
  	console.log(this.danProgram)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OmiljenoDetaljnoPage');
  }
    openPitanje(predavaciProgram) {
    this.navCtrl.push("PitanjePage", {predavaciProgram: predavaciProgram})
  }

}
