import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EstatalPage } from './estatal.page';
const routes = [
    {
        path: '',
        component: EstatalPage
    }
];
let EstatalPageModule = class EstatalPageModule {
};
EstatalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EstatalPage]
    })
], EstatalPageModule);
export { EstatalPageModule };
//# sourceMappingURL=estatal.module.js.map