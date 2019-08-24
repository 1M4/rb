import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fav2Page } from './fav2.page';
let Fav2PageModule = class Fav2PageModule {
};
Fav2PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: Fav2Page }])
        ],
        declarations: [Fav2Page]
    })
], Fav2PageModule);
export { Fav2PageModule };
//# sourceMappingURL=fav2.module.js.map