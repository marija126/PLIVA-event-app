import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController, NavParams, Events, LoadingController, Loading } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
import 'rxjs/add/operator/map'
import { OmiljenoPage } from '../omiljeno/omiljeno'
 /* Generated class for the ProgramDetaljnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-detaljno',
  templateUrl: 'program-detaljno.html',
})

export class ProgramDetaljnoPage  {
	danProgram;
	predavaciProgram;
    userInfo;
    userName;
    checkUser;
    userURL;
    userData;
    userFavorites;
    favoritesData;
    programID;
    favoriteID;
    favoriteToSend;
    predavacIMG;
    programiToShow=[];
    omiljenoAdded;
    loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ProgramProvider: ProgramProvider, private http: HttpClient, public events: Events, public loadingCtrl: LoadingController) {
      this.userInfo = JSON.parse(localStorage.getItem('wpToken'));
      this.userName = this.userInfo.user_nicename;
      this.danProgram = this.navParams.get('danProgram');
      this.programID = this.danProgram.id
      this.predavaciProgram = [];
      let object = this.danProgram.predavaci;
      Object.keys(object).map((key)=> {
          
      });
      for (var key in object) {
    	this.predavaciProgram.push(object[key]);
      }
  this.ProgramProvider.getUser().subscribe(dataFavorite => {
      this.checkUser = dataFavorite;
      
  	})
  }
    addOmiljeno(checkUser) {
     this.presentLoading();   
     setTimeout(() => {   
        for (var i in this.checkUser) {
            console.log(this.checkUser[i]);
        if(this.checkUser[i].slug === this.userName) {
           console.log(this.userName)
            this.userURL = "http://www.eventfingere.com/wp-json/wp/v2/sudionici/"+this.checkUser[i].id;
            this.http.get(this.userURL).subscribe(dataUser => {
                console.log(dataUser);
                this.userData = dataUser;
                this.userFavorites = this.userData.favorites;
                this.http.get("http://www.eventfingere.com//wp-json/wp/v2/favorites").subscribe(dataFavorites => {
                    this.favoritesData = dataFavorites;
                    for (var j in this.favoritesData) {
                        console.log(this.programID)
                      if (this.programID === Number(this.favoritesData[j].program_id)) {
                          
                          this.favoriteID = this.favoritesData[j].id;
                          console.log(this.favoriteID)
                          }
                    }
     
            
                       let index = this.userFavorites.indexOf(this.favoriteID);
                       if (index > -1) {
                         this.userFavorites.splice(index, 1);
                         console.log(this.userFavorites);
                       }
                    else {
                    this.userFavorites.push(this.favoriteID);
                    }
                    for (var k in this.userFavorites) {
                      let indexTest = this.favoritesData.findIndex(x => x.id==this.userFavorites[k]);
                      let indexSaved = this.programiToShow.findIndex(y => y.id==this.userFavorites[k]); 
                      if (indexSaved === -1) {
                        console.log(this.favoritesData[indexTest])
                        this.programiToShow.push(this.favoritesData[indexTest].program[0]);
                      }

                      console.log(indexTest)
                    }

                   localStorage.setItem('programiOmiljeno', JSON.stringify(this.programiToShow));
                   
                  console.log(this.programiToShow)
                

                 
                this.favoriteToSend = this.userFavorites.toString();
                console.log(this.favoriteToSend)
                 let dataFavoriteToSend = {
 	                  favorites: this.favoriteToSend
                    };
                    let token = this.userInfo.token;
 
                 let headers = new HttpHeaders({
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                 });
         this.http.put(this.userURL, dataFavoriteToSend, {headers: headers}).toPromise().then(result => {
        console.log('From Promise:', result);
        this.loader.dismiss();
          });
                   
                   OmiljenoPage.updateUserStatus.next(true);
                }

                )
            

            });
          
           }
        }
        
          }, 1000);

    }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramDetaljnoPage');
  }
  openPitanje(predavaciProgram) {
    this.navCtrl.push("PitanjePage", {predavaciProgram: predavaciProgram})
  }
  openPredavac(predavac) {
    this.navCtrl.push("PredavacPage", {predavac: predavac})
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Učitavam..."
    });
    this.loader.present();
  }
 
}
