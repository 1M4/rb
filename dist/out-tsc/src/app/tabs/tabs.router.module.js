import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'fem1',
                children: [
                    {
                        path: '', loadChildren: () => import('../fem1/fem1.module').then(m => m.Fem1PageModule)
                    }
                ]
            },
            {
                path: 'fav2',
                children: [
                    {
                        path: '', loadChildren: () => import('../fav2/fav2.module').then(m => m.Fav2PageModule)
                    }
                ]
            },
            {
                path: 'masc3',
                children: [
                    {
                        path: '', loadChildren: () => import('../masc3/masc3.module').then(m => m.Masc3PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/fav2',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/fav2',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map