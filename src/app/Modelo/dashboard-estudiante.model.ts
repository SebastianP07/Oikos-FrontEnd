export class Estudiante {
  id: number;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  perfilEstudiante: Datosbasicos;
  perfilOcio: PerfilOcio;
  datosContacto: DatosContacto;
  redesSociales: RedesSociales;
  estados: Estados;
  auditoria: DatosAuditoria;
}

export class Estados{
  estado: string;
  estaActivo: boolean;
  estaEliminado: boolean;
  fechaRegistro: Date;
}

export class Datosbasicos {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: Object;
  lugarNacimiento: string;
  genero: string;
  urlFoto: string;
}

export class PerfilOcio {
  hobby1: string;
  hobby2: string;
  hobby3: string;
}

export class DatosContacto {
  correoElectronico: string;
  correoElectronicoAlternativo: string;
  telefono: string;
  otroTelefono: string;
  direccionResidencia: string;
}

export class RedesSociales {
  facebook: string;
  twitter: string;
  google: string;
}

export class DatosAuditoria {
  usuarioLog: string;
}