import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Masc3Page } from './masc3.page';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
let Masc3PageModule = class Masc3PageModule {
};
Masc3PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            MatCardModule,
            MatListModule,
            MatButtonModule,
            RouterModule.forChild([{ path: '', component: Masc3Page }])
        ],
        declarations: [Masc3Page]
    })
], Masc3PageModule);
export { Masc3PageModule };
//# sourceMappingURL=masc3.module.js.map