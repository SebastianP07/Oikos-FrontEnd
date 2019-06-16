
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Padrino, DatosAuditoriaPadrino } from 'src/app/Modelo/dashboard-padrino.model';
// tslint:disable-next-line: max-line-length
import { DatosbasicosPadrino, TrabajoPadrino, DatosContactoPadrino, RedesSocialesPadrino, EstadosPadrinos } from '../../Modelo/dashboard-padrino.model';

@Component({
  selector: 'app-gestion-padrino',
  templateUrl: './gestion-padrino.component.html',
  styleUrls: ['./gestion-padrino.component.scss']
})
export class GestionPadrinoComponent implements OnInit {
  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<GestionPadrinoComponent>,
              @Inject(MAT_DIALOG_DATA) public padrino: Padrino,
              public fb: FormBuilder) {
    this.form = this.fb.group({
      tipoIdentificacion: null,
      numeroIdentificacion: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      perfilPadrino:  this.fb.group({
        primerNombre: null,
        segundoNombre: null,
        primerApellido: null,
        segundoApellido: null,
        fechaNacimiento: null,  
        lugarNacimiento: null,
        genero: null,
        urlFoto: null,
      }),
      profesionTrabajo: this.fb.group({
        empresa: null,
        cargo: null,
        profesion: null
      }),
      datosContacto: this.fb.group({
        correoElectronico: null,
        correoElectronicoAlternativo: null,
        telefono: null,
        otroTelefono: null,
        direccionResidencia: null
      }),
      redesSociales: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      estados: this.fb.group({
        estado: null,
        estaActivo: null,
        estaEliminado: null,
        fechaRegistro: null
      }),
      auditoria: this.fb.group({
        usuarioLog: 'john.lopez@cigarra.org'
      })
    });
  }

  ngOnInit() {
    if(this.padrino) {
      this.form.setValue(this.padrino);
    } else {
      this.padrino = new Padrino();
      this.padrino.perfilPadrino = new DatosbasicosPadrino();
      this.padrino.profesionTrabajo = new TrabajoPadrino();
      this.padrino.datosContacto = new DatosContactoPadrino();
      this.padrino.redesSociales = new RedesSocialesPadrino();
      this.padrino.estados = new EstadosPadrinos();
      this.padrino.auditoria = new DatosAuditoriaPadrino();
    } 
  }
  close(): void {
    this.dialogRef.close();
  }

}
