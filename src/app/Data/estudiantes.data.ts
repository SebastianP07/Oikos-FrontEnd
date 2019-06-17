import { InMemoryDbService } from 'angular-in-memory-web-api';
export class EstudianteData implements InMemoryDbService {
  createDb() {
    const estudiantes = [
      {
        id: 1,
        tipoIdentificacion: 'CC',
        numeroIdentificacion: '1022347504',
        perfilEstudiante: {
            primerNombre: 'John',
            segundoNombre: 'Alberto',
            primerApellido: 'López',
            segundoApellido: 'Hernández',
            fechaNacimiento: new Date(1988,4,23),
            lugarNacimiento: 'Cienaga',
            genero: 'Masculino',
            urlFoto: 'https://amarillo.blob.core.windows.net/foto/1022347504.jpg'
        },
        perfilOcio: {
            hobby1: 'Hobby 1 ',
            hobby2: 'Hobby 2',
            hobby3: 'Hobby 3'
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
    return {estudiantes};
  }
}
