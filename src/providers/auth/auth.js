var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
/*
  Generated class for the AuthProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.api_url = environment.site_url + environment.jwt_url;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.postLogin = function (username, password) {
        var data = {
            username: username,
            password: password
        };
        var headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.api_url, data, { headers: headers });
    };
    AuthProvider.prototype.loggedIn = function (username, password) {
        var dataSaved = {
            username: username,
            password: password
        };
        var headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.api_url, dataSaved, { headers: headers });
    };
    AuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map