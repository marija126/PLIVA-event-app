import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	username;
	password;
  loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public loadingCtrl: LoadingController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin() {
      this.presentLoading();
      this.authProvider.postLogin(this.username, this.password).subscribe(data => {
      this.navCtrl.setRoot('MenuPage');
      localStorage.setItem('wpToken', JSON.stringify(data));
      localStorage.setItem('password', JSON.stringify(this.password));
      this.loader.dismiss();
    }, error =>{ alert(JSON.stringify(error))});

  }
    presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Učitavam..."
    });
    this.loader.present();
  }
}


