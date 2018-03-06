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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
import 'rxjs/add/operator/map';
import { OmiljenoPage } from '../omiljeno/omiljeno';
/* Generated class for the ProgramDetaljnoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProgramDetaljnoPage = /** @class */ (function () {
    function ProgramDetaljnoPage(navCtrl, navParams, ProgramProvider, http, events, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProgramProvider = ProgramProvider;
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.programiToShow = [];
        this.userInfo = JSON.parse(localStorage.getItem('wpToken'));
        this.userName = this.userInfo.user_nicename;
        this.danProgram = this.navParams.get('danProgram');
        this.programID = this.danProgram.id;
        this.predavaciProgram = [];
        var object = this.danProgram.predavaci;
        Object.keys(object).map(function (key) {
        });
        for (var key in object) {
            this.predavaciProgram.push(object[key]);
        }
        this.ProgramProvider.getUser().subscribe(function (dataFavorite) {
            _this.checkUser = dataFavorite;
        });
    }
    ProgramDetaljnoPage.prototype.addOmiljeno = function (checkUser) {
        var _this = this;
        this.presentLoading();
        setTimeout(function () {
            for (var i in _this.checkUser) {
                console.log(_this.checkUser[i]);
                if (_this.checkUser[i].slug === _this.userName) {
                    console.log(_this.userName);
                    _this.userURL = "http://www.eventfingere.com/wp-json/wp/v2/sudionici/" + _this.checkUser[i].id;
                    _this.http.get(_this.userURL).subscribe(function (dataUser) {
                        console.log(dataUser);
                        _this.userData = dataUser;
                        _this.userFavorites = _this.userData.favorites;
                        _this.http.get("http://www.eventfingere.com//wp-json/wp/v2/favorites").subscribe(function (dataFavorites) {
                            _this.favoritesData = dataFavorites;
                            for (var j in _this.favoritesData) {
                                console.log(_this.programID);
                                if (_this.programID === Number(_this.favoritesData[j].program_id)) {
                                    _this.favoriteID = _this.favoritesData[j].id;
                                    console.log(_this.favoriteID);
                                }
                            }
                            var index = _this.userFavorites.indexOf(_this.favoriteID);
                            if (index > -1) {
                                _this.userFavorites.splice(index, 1);
                                console.log(_this.userFavorites);
                            }
                            else {
                                _this.userFavorites.push(_this.favoriteID);
                            }
                            for (var k in _this.userFavorites) {
                                var indexTest = _this.favoritesData.findIndex(function (x) { return x.id == _this.userFavorites[k]; });
                                var indexSaved = _this.programiToShow.findIndex(function (y) { return y.id == _this.userFavorites[k]; });
                                if (indexSaved === -1) {
                                    console.log(_this.favoritesData[indexTest]);
                                    _this.programiToShow.push(_this.favoritesData[indexTest].program[0]);
                                }
                                console.log(indexTest);
                            }
                            localStorage.setItem('programiOmiljeno', JSON.stringify(_this.programiToShow));
                            console.log(_this.programiToShow);
                            _this.favoriteToSend = _this.userFavorites.toString();
                            console.log(_this.favoriteToSend);
                            var dataFavoriteToSend = {
                                favorites: _this.favoriteToSend
                            };
                            var token = _this.userInfo.token;
                            var headers = new HttpHeaders({
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer " + token
                            });
                            _this.http.put(_this.userURL, dataFavoriteToSend, { headers: headers }).toPromise().then(function (result) {
                                console.log('From Promise:', result);
                                _this.loader.dismiss();
                            });
                            OmiljenoPage.updateUserStatus.next(true);
                        });
                    });
                }
            }
        }, 1000);
    };
    ProgramDetaljnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramDetaljnoPage');
    };
    ProgramDetaljnoPage.prototype.openPitanje = function (predavaciProgram) {
        this.navCtrl.push("PitanjePage", { predavaciProgram: predavaciProgram });
    };
    ProgramDetaljnoPage.prototype.openPredavac = function (predavac) {
        this.navCtrl.push("PredavacPage", { predavac: predavac });
    };
    ProgramDetaljnoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Učitavam..."
        });
        this.loader.present();
    };
    ProgramDetaljnoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-program-detaljno',
            templateUrl: 'program-detaljno.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProgramProvider, HttpClient, Events, LoadingController])
    ], ProgramDetaljnoPage);
    return ProgramDetaljnoPage;
}());
export { ProgramDetaljnoPage };
//# sourceMappingURL=program-detaljno.js.map