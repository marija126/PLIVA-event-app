import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userInfo;
  username;
  password;
  loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  goToLogin() {
    
  	if(localStorage.getItem('wpToken')){
    this.presentLoading();
    this.password = JSON.parse(localStorage.getItem('password'));  
    console.log(this.password)
    this.userInfo = JSON.parse(localStorage.getItem('wpToken'));  
    this.username = this.userInfo.user_email;
    console.log(this.username + " " + this.password);
    localStorage.removeItem('wpToken');
    this.authProvider.loggedIn(this.username, this.password).subscribe(dataSaved => {
      this.navCtrl.setRoot('MenuPage');
      localStorage.setItem('wpToken', JSON.stringify(dataSaved));
      this.loader.dismiss();

    }, error =>{ alert(JSON.stringify(error))});
    }
    else {
    	this.navCtrl.push("LoginPage")

    }
  	
  }
      presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Učitavam..."
    });
    this.loader.present();
  }
}
