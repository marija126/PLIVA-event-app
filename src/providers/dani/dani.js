var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
/*
  Generated class for the ProgramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DaniProvider = /** @class */ (function () {
    function DaniProvider(http) {
        this.http = http;
        this.api_url = environment.site_url + environment.dani_url;
        console.log('Hello DaniProvider Provider');
    }
    DaniProvider.prototype.getDani = function () {
        return this.http.get(this.api_url);
    };
    DaniProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DaniProvider);
    return DaniProvider;
}());
export { DaniProvider };
//# sourceMappingURL=dani.js.map