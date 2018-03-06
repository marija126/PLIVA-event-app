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
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, authProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToLogin = function () {
        var _this = this;
        if (localStorage.getItem('wpToken')) {
            this.presentLoading();
            this.password = JSON.parse(localStorage.getItem('password'));
            console.log(this.password);
            this.userInfo = JSON.parse(localStorage.getItem('wpToken'));
            this.username = this.userInfo.user_email;
            console.log(this.username + " " + this.password);
            localStorage.removeItem('wpToken');
            this.authProvider.loggedIn(this.username, this.password).subscribe(function (dataSaved) {
                _this.navCtrl.setRoot('MenuPage');
                localStorage.setItem('wpToken', JSON.stringify(dataSaved));
                _this.loader.dismiss();
            }, function (error) { alert(JSON.stringify(error)); });
        }
        else {
            this.navCtrl.push("LoginPage");
        }
    };
    HomePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Učitavam..."
        });
        this.loader.present();
    };
    HomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthProvider, LoadingController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map