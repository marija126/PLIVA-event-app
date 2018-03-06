var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AktualnoProvider } from '../../providers/aktualno/aktualno';
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
/**
 * Generated class for the DodajAktualnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DodajAktualnoPage = /** @class */ (function () {
    function DodajAktualnoPage(navCtrl, navParams, AktualnoProvider, camera, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AktualnoProvider = AktualnoProvider;
        this.camera = camera;
        this.transfer = transfer;
        this.user = JSON.parse(localStorage.getItem('wpToken'));
        this.autor = this.user.user_display_name;
        console.log(this.user);
    }
    DodajAktualnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DodajAktualnoPage');
    };
    DodajAktualnoPage.prototype.addAktualno = function () {
        console.log(this.content);
        this.AktualnoProvider.postAktualno(this.title, this.content, this.autor, this.slika).subscribe(function (data) {
        });
    };
    DodajAktualnoPage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData = imageData;
            _this.imageURL = "data:image/png;base64," + imageData;
        }, function (err) {
            alert(err);
        });
    };
    DodajAktualnoPage.prototype.uploadPhoto = function () {
        var _this = this;
        var token = JSON.parse(localStorage.getItem('wpToken')).token;
        var t = this.transfer.create();
        t.upload(this.imageURL, "http://www.eventfingere.com/wp-json/wp/v2/media", {
            headers: {
                'Authorization': "Bearer " + token,
                'content-disposition': 'attachment; filename="aktualnoSlika.png"'
            }
        }).then(function (res) {
            console.log("prošlo");
            _this.res =
                _this.slika = JSON.parse(res.guid.rendered);
            alert(JSON.stringify(res));
        }).catch(function (err) {
            console.log(token);
            alert(JSON.stringify(err));
        });
    };
    DodajAktualnoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dodaj-aktualno',
            templateUrl: 'dodaj-aktualno.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AktualnoProvider, Camera, Transfer])
    ], DodajAktualnoPage);
    return DodajAktualnoPage;
}());
export { DodajAktualnoPage };
//# sourceMappingURL=dodaj-aktualno.js.map