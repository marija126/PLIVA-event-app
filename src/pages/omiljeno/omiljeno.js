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
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the OmiljenoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OmiljenoPage = /** @class */ (function () {
    function OmiljenoPage(navCtrl, navParams, ProgramProvider, http, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProgramProvider = ProgramProvider;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.programIDArray = [];
        this.programiToShow = [];
        OmiljenoPage_1.updateUserStatus.subscribe(function (omiljeno) {
            _this.programiToShow = JSON.parse(localStorage.getItem('programiOmiljeno'));
            console.log(omiljeno);
        });
        if (localStorage.getItem('omiljenoSaved')) {
            this.programiToShow = JSON.parse(localStorage.getItem('programiOmiljeno'));
        }
        else {
            this.presentLoading();
            this.ProgramProvider.getUser().subscribe(function (dataFavorite) {
                _this.checkUser = dataFavorite;
                for (var i in _this.checkUser) {
                    if (_this.user.user_nicename === _this.checkUser[i].slug) {
                        _this.userID = _this.checkUser[i].id;
                        _this.userFavorite = _this.checkUser[i].favorites;
                        console.log(_this.userFavorite);
                        _this.http.get("http://www.eventfingere.com/wp-json/wp/v2/favorites").subscribe(function (dataFavorites) {
                            _this.favorite = dataFavorites;
                            console.log(_this.favorite);
                            for (var k in _this.favorite) {
                                for (var j in _this.userFavorite) {
                                    if (_this.favorite[k].id === _this.userFavorite[j]) {
                                        _this.programiToShow.push(_this.favorite[k].program[0]);
                                        console.log(_this.programiToShow);
                                    }
                                }
                            }
                            _this.loader.dismiss();
                        });
                    }
                }
                console.log(_this.checkUser);
            });
        }
        this.user = JSON.parse(localStorage.getItem('wpToken'));
        console.log(this.user);
    }
    OmiljenoPage_1 = OmiljenoPage;
    OmiljenoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    OmiljenoPage.prototype.showDetailedOmiljeno = function (danProgram) {
        this.navCtrl.push("OmiljenoDetaljnoPage", { danProgram: danProgram });
    };
    OmiljenoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OmiljenoPage');
    };
    OmiljenoPage.updateUserStatus = new Subject();
    OmiljenoPage = OmiljenoPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-omiljeno',
            templateUrl: 'omiljeno.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProgramProvider, HttpClient, LoadingController, Events])
    ], OmiljenoPage);
    return OmiljenoPage;
    var OmiljenoPage_1;
}());
export { OmiljenoPage };
//# sourceMappingURL=omiljeno.js.map