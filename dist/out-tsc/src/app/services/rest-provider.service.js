import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { retryOperator } from './retryOperator';
let RestProviderService = class RestProviderService {
    constructor(http) {
        this.http = http;
        this.dataUrl = 'http://icobian.es';
    }
    getClasificacion(id) {
        return this.http.get(this.dataUrl + '/clasificacion' + id).pipe(retryOperator(1250), shareReplay());
    }
    getCalendario(id) {
        return this.http.get(this.dataUrl + '/calendario' + id).pipe(retryOperator(1250), shareReplay());
    }
    getGrupos(id) {
        return this.http.get(this.dataUrl + '/grupos' + id).pipe(retryOperator(1250), shareReplay());
    }
    getEliminatoria(id) {
        return this.http.get(this.dataUrl + '/eliminatoria' + id).pipe(retryOperator(1250), shareReplay());
    }
};
RestProviderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], RestProviderService);
export { RestProviderService };
//# sourceMappingURL=rest-provider.service.js.map