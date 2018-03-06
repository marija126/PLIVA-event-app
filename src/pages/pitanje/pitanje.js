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
import { ProgramProvider } from '../../providers/program/program';
/**
 * Generated class for the PitanjePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PitanjePage = /** @class */ (function () {
    function PitanjePage(navCtrl, navParams, ProgramProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProgramProvider = ProgramProvider;
        this.predavaciProgram = this.navParams.get('predavaciProgram');
    }
    PitanjePage.prototype.addPitanje = function () {
        console.log(this.pitanje_za_predavaca);
        this.ProgramProvider.postPitanje(this.predavac, this.pitanje_za_predavaca, this.autor).subscribe(function (data) {
        });
    };
    PitanjePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PitanjePage');
    };
    PitanjePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pitanje',
            templateUrl: 'pitanje.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProgramProvider])
    ], PitanjePage);
    return PitanjePage;
}());
export { PitanjePage };
//# sourceMappingURL=pitanje.js.map