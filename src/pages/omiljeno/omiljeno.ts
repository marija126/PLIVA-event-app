import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Events  } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the OmiljenoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-omiljeno',
  templateUrl: 'omiljeno.html',
})
export class OmiljenoPage {
checkUser;
user;
userID;
userFavorite;
favorite;
programIDArray=[];
programiToShow=[];
favoriteArray;
programFavorite;
programiFavorite;
loader: Loading;
public static updateUserStatus: Subject<boolean> = new Subject();
  constructor(public navCtrl: NavController, public navParams: NavParams, private ProgramProvider: ProgramProvider, private http: HttpClient, public loadingCtrl: LoadingController, public events: Events) {
  OmiljenoPage.updateUserStatus.subscribe(omiljeno => {
     this.programiToShow = JSON.parse(localStorage.getItem('programiOmiljeno'));
    
     console.log(omiljeno)
   })
    if(localStorage.getItem('omiljenoSaved')){ 
      this.programiToShow = JSON.parse(localStorage.getItem('programiOmiljeno'));  
    }
    else {
     this.presentLoading();
     this.ProgramProvider.getUser().subscribe(dataFavorite => {
      this.checkUser = dataFavorite;
      for (var i in this.checkUser) {
         if (this.user.user_nicename === this.checkUser[i].slug) {
           this.userID = this.checkUser[i].id;
           this.userFavorite = this.checkUser[i].favorites;
           console.log(this.userFavorite)
              this.http.get("http://www.eventfingere.com/wp-json/wp/v2/favorites").subscribe(dataFavorites => {
                this.favorite = dataFavorites;
                console.log(this.favorite)
                for (var k in this.favorite) {
                  for (var j in this.userFavorite) {
                    if (this.favorite[k].id=== this.userFavorite[j]) {
                     this.programiToShow.push(this.favorite[k].program[0]);
                     console.log(this.programiToShow) 
                    }
                  }            
                }
              this.loader.dismiss();               
              });
           
         }
      }
     
      console.log(this.checkUser)
      
    })
    }


  	this.user = JSON.parse(localStorage.getItem('wpToken'));
	console.log(this.user)
  }
      presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }
  showDetailedOmiljeno(danProgram) {
    this.navCtrl.push("OmiljenoDetaljnoPage", {danProgram: danProgram})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OmiljenoPage');
  }

}
