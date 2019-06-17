import { AppSettings } from './../app.settings';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Settings } from '../app.settings.model';
import { DashboardEstudianteService } from './dashboard-estudiante.service';
import { Estudiante } from '../Modelo/dashboard-estudiante.model';
import { MatDialog } from '@angular/material';
import { GestionEstudianteComponent } from './gestion-estudiante/gestion-estudiante.component';

@Component({
  selector: 'app-dashboard-estudiante',
  templateUrl: './dashboard-estudiante.component.html',
  styleUrls: ['./dashboard-estudiante.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ DashboardEstudianteService ]
})
export class DashboardEstudianteComponent implements OnInit {


  public estudiantes: Estudiante[];
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
              public dialog: MatDialog,
              public estudiantesService: DashboardEstudianteService){
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
      this.getPadrinos();
  }

  public getPadrinos(): void {
      this.estudiantes = null;
      this.estudiantesService.getEstudiantes().subscribe(estudiantes => this.estudiantes = estudiantes);  
  }
  public addEstudiante(estudiante: Estudiante){
      this.estudiantesService.addEstudiante(estudiante).subscribe(estudiante => this.getPadrinos());
  }
  public updateEstudiante(estudiante: Estudiante){
      this.estudiantesService.updateEstudiante(estudiante).subscribe(estudiante => this.getPadrinos());
  }
  public deleteEstudiante(estudiante: Estudiante){
     this.estudiantesService.deleteEstudiante(estudiante.id).subscribe(user => this.getPadrinos());
  }


  public onPageChanged(event){
      this.page = event;
      this.getPadrinos();
      if (this.settings.fixedHeader){
          document.getElementById('main-content').scrollTop = 0;
      } else {
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
      }
  }

  public openUserDialog(estudiante){
      const dialogRef = this.dialog.open(GestionEstudianteComponent, {
          data: estudiante
      });

      dialogRef.afterClosed().subscribe(estudiante => {
          if (estudiante){
              (estudiante.id) ? this.updateEstudiante(estudiante) : this.addEstudiante(estudiante);
          }
      });
  }


}
