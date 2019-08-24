import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { RestProviderService } from '../services/rest-provider.service';
import { Location } from '@angular/common';
let EstatalPage = class EstatalPage {
    constructor(route, router, provider, loadingCtrl, alertCtrl, location) {
        this.route = route;
        this.router = router;
        this.provider = provider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.route.queryParams.subscribe(params => {
            this.title = this.router.getCurrentNavigation().extras.state.title;
            this.id = this.router.getCurrentNavigation().extras.state.id;
        });
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Cargando...'
            });
            yield loading.present().then(() => {
                this.getClasificacion(this.id);
                this.getCalendario(this.id);
            });
        });
    }
    getClasificacion(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.provider.getClasificacion(id).subscribe(data => {
                this.clasificacion = data;
            });
        });
    }
    getCalendario(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.provider.getCalendario(id).subscribe(data => {
                this.calendario = data;
                this.loadingCtrl.dismiss();
            }, error => {
                console.error(error);
                this.loadingCtrl.dismiss().then(() => {
                    this.presentAlert();
                });
            });
        });
    }
    presentAlert() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error al conectar con el servidor',
                message: 'Ha ocurrido un error al intentar conectar con el servidor. Por favor, inténtalo de nuevo o revisa tu conexión a Internet.',
                // cssClass: 'clase-alert',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            this.location.back();
                        }
                    }]
            });
            alert.present();
        });
    }
    ionViewDidLeave() {
        this.loadingCtrl.dismiss();
        this.alertCtrl.dismiss();
    }
};
EstatalPage = tslib_1.__decorate([
    Component({
        selector: 'app-estatal',
        templateUrl: './estatal.page.html',
        styleUrls: ['./estatal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, RestProviderService,
        LoadingController, AlertController, Location])
], EstatalPage);
export { EstatalPage };
//# sourceMappingURL=estatal.page.js.map