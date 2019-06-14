import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(padrino => {
        if (padrino.perfilPadrino.primerNombre) {
          return padrino.perfilPadrino.primerNombre.search(searchText) !== -1;
        }
        else{
          return padrino.perfilPadrino.primerNombre.search(searchText) !== -1;
        }
      });
    }
  }
}