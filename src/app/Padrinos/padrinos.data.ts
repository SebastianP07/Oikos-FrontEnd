import { InMemoryDbService } from 'angular-in-memory-web-api';
export class PadrinoData implements InMemoryDbService {
  createDb() {
    const padrinos = [
      {
        tipoIdentificacion: 'CC',
        numeroIdentificacion: '1022347504',
        username: 'johnalbh',
        password: '1234567',
        perfilPadrino: {
            primerNombre: 'John',
            segundoNombre: 'Alberto',
            primerApellido: 'López',
            segundoApellido: 'Hernández',
            fechaNacimiento: new Date(1988,4,23),
            lugarNacimiento: 'Cienaga',
            genero: 'Masculino',
            urlFoto: 'https://amarillo.blob.core.windows.net/foto/1022347504.jpg'
        },
        profesionTrabajo: {
            empresa: 'Colegio San Jorge de Inglaterra',
            cargo: 'Desarrollador de Aplicaciones',
            profesion: 'Ingeniero de Sistemas'
        },
        datosContacto:{
          correoElectronico: 'john.lopez@sgs.edu.co',
          correoElectronicoAlternativo: 'johnalbh@gmail.com',
          telefono: '573002995465',
          otroTelefono: '13030569',
          direccionResidencia: 'Calle 98C 70C 38 Apto 302 int 5'
        },
        redesSociales: {
            facebook: 'johnalbh',
            twitter: 'johnalbh',
            google: ''
        },
        estados:{
            estado: 'Activo',
            estaActivo: true,
            estaEliminado: false,
            fechaRegistro: "2012-10-13T12:20:40.511Z",
        },
        auditoria:{
          usuarioLog: 'john.lopez@cigarra.org'
      },
    },
    ];
    return {padrinos};
  }
}
