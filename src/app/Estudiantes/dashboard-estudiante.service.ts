import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Estudiante } from '../Modelo/dashboard-estudiante.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardEstudianteService {
  public url = 'api/estudiantes';
  constructor(public http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.url);
  }

  addEstudiante(estudiante: Estudiante) {
      return this.http.post(this.url, estudiante);
  }

  updateEstudiante(estudiante: Estudiante) {
      return this.http.put(this.url, estudiante);
  }

  deleteEstudiante(id: number) {
      return this.http.delete(this.url + '/' + id);
  }
}
