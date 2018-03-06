var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OmiljenoPage } from './omiljeno';
var OmiljenoPageModule = /** @class */ (function () {
    function OmiljenoPageModule() {
    }
    OmiljenoPageModule = __decorate([
        NgModule({
            declarations: [
                OmiljenoPage,
            ],
            imports: [
                IonicPageModule.forChild(OmiljenoPage),
            ],
        })
    ], OmiljenoPageModule);
    return OmiljenoPageModule;
}());
export { OmiljenoPageModule };
//# sourceMappingURL=omiljeno.module.js.map