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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProgramProvider } from '../../providers/program/program';
/**
 * Generated class for the PredavaciPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PredavaciPage = /** @class */ (function () {
    function PredavaciPage(navCtrl, navParams, ProgramProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProgramProvider = ProgramProvider;
        this.loadingCtrl = loadingCtrl;
        this.presentLoading();
        this.ProgramProvider.getPredavaci().subscribe(function (dataPredavaci) {
            _this.predavaci = dataPredavaci;
            console.log(_this.predavaci);
            _this.loader.dismiss();
        });
    }
    PredavaciPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PredavaciPage');
    };
    PredavaciPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    PredavaciPage.prototype.openPredavac = function (predavac) {
        this.navCtrl.push("PredavacPage", { predavac: predavac });
    };
    PredavaciPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-predavaci',
            templateUrl: 'predavaci.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProgramProvider, LoadingController])
    ], PredavaciPage);
    return PredavaciPage;
}());
export { PredavaciPage };
//# sourceMappingURL=predavaci.js.map