import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Padrino } from '../Modelo/dashboard-padrino.model';
export class PadrinoData implements InMemoryDbService {
  createDb() {
    const padrinos = [
        {
            TipoIdentificacion: 'CC',
            NumeroIdentificacion: '1022347504',
            LugarExpedicion: '111011',
            PrimerNombre: 'John',
            SegundoNombre: 'Alberto',
            PrimerApellido: 'López',
            SegundoApellido: 'Hernández',
            FechaNacimiento: new Date(1988, 4, 23),
            LugarNacimiento: '111011',
            Edad: 23,
            Genero: 'M',
            CorreoElectronico: 'johnalbh@gmail.cm',
            CorreoElectronicoAlternativo: 'johnalbh@hotmail.cm',
            Telefono: '3002995465',
            OtroTelefono: '14324000',
            UrlFoto: 'https://amarillo.blob.core.windows.net/foto/31009.jpg',
            Estado: 1,
            UsuarioLog: 'john.lopez@sgs.edu.co'
        },
    ];
    return {padrinos};
  }
}
