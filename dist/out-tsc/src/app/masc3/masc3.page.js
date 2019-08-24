import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let Masc3Page = class Masc3Page {
    constructor(router) {
        this.router = router;
    }
    goToEstatal(title, id) {
        const navigationExtras = {
            state: {
                title: title,
                id: id
            }
        };
        this.router.navigate(['estatal'], navigationExtras);
    }
};
Masc3Page = tslib_1.__decorate([
    Component({
        selector: 'app-masc3',
        templateUrl: 'masc3.page.html',
        styleUrls: ['masc3.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], Masc3Page);
export { Masc3Page };
//# sourceMappingURL=masc3.page.js.map