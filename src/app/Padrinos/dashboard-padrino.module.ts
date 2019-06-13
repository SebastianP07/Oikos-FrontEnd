import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPadrinoComponent } from './gestion-padrino/gestion-padrino.component';
import { DashboardPadrinoComponent } from './dashboard-padrino.component';
import { PipesModule } from '../theme/pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PadrinoData } from '../Data/padrinos.data';

export const routes = [
  { path: '', component: DashboardPadrinoComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(PadrinoData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule
  ],
  declarations: [
    DashboardPadrinoComponent,
    GestionPadrinoComponent
  ],
  entryComponents:[
    GestionPadrinoComponent
  ]
})
export class DashboardPadrinoModule { }
