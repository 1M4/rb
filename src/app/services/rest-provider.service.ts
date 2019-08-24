import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';
import { retryOperator } from './retryOperator';

@Injectable({
  providedIn: 'root'
})
export class RestProviderService {

  private dataUrl = 'http://icobian.es';

  constructor(public http: HttpClient) { }

  getClasificacion(id: number) {
    return this.http.get(this.dataUrl + '/clasificacion' + id).pipe(
      retryOperator(1250),
      shareReplay()
    );
  }

  getCalendario(id: number) {
    return this.http.get(this.dataUrl + '/calendario' + id).pipe(
      retryOperator(1250),
      shareReplay()
    );
  }

  getGrupos(id: number) {
    return this.http.get(this.dataUrl + '/grupos' + id).pipe(
      retryOperator(1250),
      shareReplay()
    );
  }

  getEliminatoria(id: number) {
    return this.http.get(this.dataUrl + '/eliminatoria' + id).pipe(
      retryOperator(1250),
      shareReplay()
    );
  }

}
