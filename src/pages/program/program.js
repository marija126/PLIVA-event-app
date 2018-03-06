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
import { DaniProvider } from '../../providers/dani/dani';
/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramPage = /** @class */ (function () {
    function ProgramPage(navCtrl, navParams, ProgramProvider, DaniProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProgramProvider = ProgramProvider;
        this.DaniProvider = DaniProvider;
        this.loadingCtrl = loadingCtrl;
        this.presentLoading();
        this.ProgramProvider.getPrograms().subscribe(function (data) {
            _this.programi = data;
            _this.loader.dismiss();
        });
        this.DaniProvider.getDani().subscribe(function (data) {
            _this.dani = data;
            _this.daniOrdered = _this.dani.slice().reverse();
            console.log(_this.dani);
            _this.loader.dismiss();
        });
    }
    ProgramPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    ProgramPage.prototype.showDetailedProgram = function (danProgram) {
        this.navCtrl.push("ProgramDetaljnoPage", { danProgram: danProgram });
    };
    ProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramPage');
    };
    ProgramPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-program',
            templateUrl: 'program.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProgramProvider, DaniProvider, LoadingController])
    ], ProgramPage);
    return ProgramPage;
}());
export { ProgramPage };
//# sourceMappingURL=program.js.map