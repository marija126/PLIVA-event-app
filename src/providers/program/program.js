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
  Generated class for the ProgramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgramProvider = /** @class */ (function () {
    function ProgramProvider(http) {
        this.http = http;
        this.api_url = environment.site_url + environment.program_url;
        this.pitaj_url = environment.site_url + environment.pitanje_url;
        this.favorite_url = environment.site_url + environment.sudionici_url;
        this.predavaci_url = environment.site_url + environment.predavac_url;
        console.log('Hello ProgramProvider Provider');
    }
    ProgramProvider.prototype.getPrograms = function () {
        return this.http.get(this.api_url);
    };
    ProgramProvider.prototype.postPitanje = function (predavac, pitanje_za_predavaca, autor) {
        var data = {
            title: 'Pitanje za predavača - ' + predavac,
            pitanje: pitanje_za_predavaca,
            autor: autor
        };
        var token = JSON.parse(localStorage.getItem('wpToken')).token;
        console.log(token);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return this.http.post(this.pitaj_url, data, { headers: headers });
    };
    ProgramProvider.prototype.getUser = function () {
        return this.http.get(this.favorite_url);
    };
    ProgramProvider.prototype.getPredavaci = function () {
        return this.http.get(this.predavaci_url);
    };
    ProgramProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProgramProvider);
    return ProgramProvider;
}());
export { ProgramProvider };
//# sourceMappingURL=program.js.map