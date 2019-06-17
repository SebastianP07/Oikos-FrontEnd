import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Estudiante, Estados, DatosAuditoria, RedesSociales, DatosContacto, PerfilOcio, Datosbasicos } from '../../Modelo/dashboard-estudiante.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gestion-estudiante',
  templateUrl: './gestion-estudiante.component.html',
  styleUrls: ['./gestion-estudiante.component.scss']
})
export class GestionEstudianteComponent implements OnInit {

  public form: FormGroup;
  public passwordHide: boolean = true;
  constructor(public dialogRef: MatDialogRef<GestionEstudianteComponent>,
              @Inject(MAT_DIALOG_DATA) public estudiante: Estudiante,
              public fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      tipoIdentificacion: null,
      numeroIdentificacion: null,
      perfilEstudiante:  this.fb.group({
        primerNombre: null,
        segundoNombre: null,
        primerApellido: null,
        segundoApellido: null,
        fechaNacimiento: null, 
        lugarNacimiento: null,
        genero: null,
        urlFoto: null,
      }),
      perfilOcio: this.fb.group({
        hobby1: null,
        hobby2: null,
        hobby3: null
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
    if(this.estudiante) {
      this.form.setValue(this.estudiante);
    } else {
      this.estudiante = new Estudiante();
      this.estudiante.perfilEstudiante = new Datosbasicos();
      this.estudiante.perfilOcio = new PerfilOcio();
      this.estudiante.datosContacto = new DatosContacto();
      this.estudiante.redesSociales = new RedesSociales();
      this.estudiante.estados = new Estados();
      this.estudiante.auditoria = new DatosAuditoria();
    } 
  }
  close(): void {
    this.dialogRef.close();
  }

}
