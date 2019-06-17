import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Padrino } from '../Modelo/dashboard-padrino.model';

@Injectable ()
export class DashboardPadrinoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public url = "api/padrinos";
  constructor(public http: HttpClient) { }

  getPadrinos(): Observable<Padrino[]> {
      return this.http.get<Padrino[]>(this.url);
  }

  addPadrino(padrino: Padrino) {
      return this.http.post(this.url, padrino);
  }

  updatePadrino(padrino: Padrino) {
      return this.http.put(this.url, padrino);
  }

  deletePadrino(id:number) {
      return this.http.delete(this.url + '/' + id);
  }
}

