import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Padrino } from '../Modelo/dashboard-padrino.model';

@Injectable ()
export class DashboardPadrinoService {

  public url = 'api/padrinos';
  constructor(public http: HttpClient) { }

  getPadrinos(): Observable<Padrino[]> {
      return this.http.get<Padrino[]>(this.url);
  }

  addPadrino(user: Padrino) {
      return this.http.post(this.url, Padrino);
  }

  updatePadrino(user: Padrino) {
      return this.http.put(this.url, user);
  }

  deletePadrino(id: string) {
      return this.http.delete(this.url + '/' + id);
  }
}
