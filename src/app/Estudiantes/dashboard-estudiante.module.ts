import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../theme/pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardEstudianteComponent } from './dashboard-estudiante.component';
import { GestionEstudianteComponent } from './gestion-estudiante/gestion-estudiante.component';
import { PadrinoData } from '../Data/padrinos.data';
import { EstudianteData } from '../Data/estudiantes.data';


export const routes = [
  { path: '', component: DashboardEstudianteComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(EstudianteData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule
  ],
  declarations: [
    DashboardEstudianteComponent,
    GestionEstudianteComponent
  ],
  entryComponents: [
    GestionEstudianteComponent
  ]
})
export class DashboardEstudianteModule { }
