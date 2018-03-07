import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AktualnoProvider } from '../../providers/aktualno/aktualno';
import { Renderer } from '@angular/core';
/**
 * Generated class for the AktualnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aktualno',
  templateUrl: 'aktualno.html',
})
export class AktualnoPage {
loader: Loading;
aktualno;
likes;
noLikes;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private AktualnoProvider: AktualnoProvider, public renderer: Renderer) {
  	this.presentLoading();
  	this.AktualnoProvider.getAktualno().subscribe(dataAktualno => {
        this.aktualno = dataAktualno;
        console.log(this.aktualno)
        console.log(this.aktualno[0].autor[0].slika_sudionik)
        this.loader.dismiss();
  	})
  }
presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
}
addLike(event) {
	this.AktualnoProvider.getAktualno().subscribe(dataLike => {
        this.aktualno = dataLike;
       	this.likes = Number(this.aktualno.likes);
       	if (event.target.classList.contains('liked')) {
       		this.likes--;
       		console.log(this.likes)
       	}
       	else {
       		this.renderer.setElementAttribute(event.target, "class", 'liked');
       		console.log("nema")
       		this.likes++;
       		console.log(this.likes)

       	}
  	})
}
ionViewDidLoad() {
    console.log('ionViewDidLoad AktualnoPage');
}
goToCreateAkutalno(){
	this.navCtrl.push('DodajAktualnoPage');
}

}
