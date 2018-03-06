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
import { IonicPage, NavParams } from 'ionic-angular';
var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.tab1Root = 'OmiljenoPage';
        this.tab2Root = 'AktualnoPage';
        this.tab3Root = 'ProgramPage';
        this.tab4Root = 'PredavaciPage';
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html',
        }),
        __metadata("design:paramtypes", [NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map