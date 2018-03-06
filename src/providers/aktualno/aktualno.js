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
  Generated class for the AktualnoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AktualnoProvider = /** @class */ (function () {
    function AktualnoProvider(http) {
        this.http = http;
        this.api_url = environment.site_url + environment.aktualno_url;
        console.log('Hello AktualnoProvider Provider');
    }
    AktualnoProvider.prototype.getAktualno = function () {
        return this.http.get(this.api_url);
    };
    AktualnoProvider.prototype.postAktualno = function (title, content, autor, slika) {
        var data = {
            title: 'Post aktualno',
            post_tekst: content,
            autor: autor,
            aktualno_slika: slika
        };
        var token = JSON.parse(localStorage.getItem('wpToken')).token;
        console.log(token);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return this.http.post(this.api_url, data, { headers: headers });
    };
    AktualnoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AktualnoProvider);
    return AktualnoProvider;
}());
export { AktualnoProvider };
//# sourceMappingURL=aktualno.js.map