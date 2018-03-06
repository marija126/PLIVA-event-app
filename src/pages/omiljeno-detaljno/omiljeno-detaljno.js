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
/**
 * Generated class for the OmiljenoDetaljnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OmiljenoDetaljnoPage = /** @class */ (function () {
    function OmiljenoDetaljnoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.danProgram = this.navParams.get('danProgram');
        this.predavaciProgram = [];
        var object = this.danProgram.predavaci;
        Object.keys(object).map(function (key) {
        });
        for (var key in object) {
            this.predavaciProgram.push(object[key]);
        }
        console.log(this.danProgram);
    }
    OmiljenoDetaljnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OmiljenoDetaljnoPage');
    };
    OmiljenoDetaljnoPage.prototype.openPitanje = function (predavaciProgram) {
        this.navCtrl.push("PitanjePage", { predavaciProgram: predavaciProgram });
    };
    OmiljenoDetaljnoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-omiljeno-detaljno',
            templateUrl: 'omiljeno-detaljno.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], OmiljenoDetaljnoPage);
    return OmiljenoDetaljnoPage;
}());
export { OmiljenoDetaljnoPage };
//# sourceMappingURL=omiljeno-detaljno.js.map