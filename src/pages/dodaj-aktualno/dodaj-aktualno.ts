import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AktualnoProvider } from '../../providers/aktualno/aktualno';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the DodajAktualnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dodaj-aktualno',
  templateUrl: 'dodaj-aktualno.html',
})
export class DodajAktualnoPage {
content;
autor;
title;
user;
imageData;
imageURL;
slika;
res;
resFinal;
loader: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AktualnoProvider: AktualnoProvider, private camera: Camera, private transfer: Transfer, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) {
  
    this.user = JSON.parse(localStorage.getItem('wpToken'));
    this.autor = this.user.user_display_name;
    console.log(this.user)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DodajAktualnoPage');
  }
addAktualno(){
	console.log(this.content)
	this.AktualnoProvider.postAktualno(this.title, this.content, this.autor, this.slika).subscribe(data => {
		
	})
}
getPhoto (selectedSourceType:number) {
  let options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: selectedSourceType,
    allowEdit: false,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    targetHeight: 500,
    targetWidth: 500
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageData = imageData;
    this.imageURL = "data:image/png;base64," + imageData;
  }, (err) => {
    alert(err)
  })
}
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Dodaj fotografiju',
      buttons: [
        {
          text: 'Snimi fotografiju',
          handler: () => {
            this.getPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },{
          text: 'Foto galerija',
          handler: () => {
            this.getPhoto(this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    });
    actionSheet.present();
  }

uploadPhoto() {
//  this.presentLoading();
  let token = JSON.parse(localStorage.getItem('wpToken')).token;
  let t = this.transfer.create();
  t.upload(this.imageURL, "http://www.eventfingere.com/wp-json/wp/v2/media", {
    headers: {
   'Authorization': `Bearer ${token}`,
   'content-disposition':'attachment; filename="aktualnoSlika.png"'
    }

  }).then(data => {
//    this.loader.dismiss();    
    this.res = data.response;
    this.resFinal = JSON.parse(this.res);
    this.slika = this.resFinal.guid.rendered;
   }).catch((err) => {
     this.res = JSON.stringify(err)
      this.slika = this.resFinal.guid.rendered;
    console.log(this.resFinal.guid.rendered)

  })

}


presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }
}

