export class Padrino {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  perfilPadrino: DatosbasicosPadrino;
  profesionTrabajo: TrabajoPadrino;
  datosContacto: DatosContactoPadrino;
  redesSociales: RedesSocialesPadrino;
  estados: EstadosPadrinos;
  auditoria: DatosAuditoriaPadrino;
}

export class EstadosPadrinos{
  estado: string;
  estaActivo: boolean;
  estaEliminado: boolean;
  fechaRegistro: Date;
}

export class DatosbasicosPadrino {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: Object;
  lugarNacimiento: string;
  genero: string;
  urlFoto: string;
}

export class TrabajoPadrino {
  empresa: string;
  cargo: string;
  profesion: string;
}

export class DatosContactoPadrino {
  correoElectronico: string;
  correoElectronicoAlternativo: string;
  telefono: string;
  otroTelefono: string;
  direccionResidencia: string;
}

export class RedesSocialesPadrino {
  facebook: string;
  twitter: string;
  google: string;
}

export class DatosAuditoriaPadrino {
  usuarioLog: string;
}