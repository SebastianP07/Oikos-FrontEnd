import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Padrino } from '../Modelo/dashboard-padrino.model';
import { MatDialog } from '@angular/material';
import { DashboardPadrinoService } from './dashboard-padrino.service';
import { GestionPadrinoComponent } from './gestion-padrino/gestion-padrino.component';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-dashboard-padrino',
  templateUrl: './dashboard-padrino.component.html',
  styleUrls: ['./dashboard-padrino.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ DashboardPadrinoService ]
})
export class DashboardPadrinoComponent implements OnInit {

  public padrinos: Padrino[];
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
              public dialog: MatDialog,
              public padrinosService: DashboardPadrinoService){
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
      this.getPadrinos();
  }

  public getPadrinos(): void {
      this.padrinos = null;
      this.padrinosService.getPadrinos().subscribe(padrinos => this.padrinos = padrinos);    
  }
  public addPadrino(padrino: Padrino){
      this.padrinosService.addPadrino(padrino).subscribe(padrino => this.getPadrinos());
  }
  public updatePadrino(padrino: Padrino){
      this.padrinosService.updatePadrino(padrino).subscribe(padrino => this.getPadrinos());
  }
  public deletePadrino(padrino: Padrino){
     this.padrinosService.deletePadrino(padrino.numeroIdentificacion).subscribe(user => this.getPadrinos);
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

  public openUserDialog(padrino){
      // tslint:disable-next-line:prefer-const
      let dialogRef = this.dialog.open(GestionPadrinoComponent, {
          data: padrino
      });

      dialogRef.afterClosed().subscribe(user => {
          if (padrino){
              (user.id) ? this.updatePadrino(padrino) : this.addPadrino(padrino);
          }
      });
  }

}
