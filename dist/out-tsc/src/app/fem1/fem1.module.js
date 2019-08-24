import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fem1Page } from './fem1.page';
let Fem1PageModule = class Fem1PageModule {
};
Fem1PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: '', component: Fem1Page }])
        ],
        declarations: [Fem1Page]
    })
], Fem1PageModule);
export { Fem1PageModule };
//# sourceMappingURL=fem1.module.js.map