import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(padrino => {
        if (padrino.PrimerNombre) {
          return padrino.PrimerNombre.search(searchText) !== -1;
        }
        else{
          return padrino.PrimerNombre.search(searchText) !== -1;
        }
      });
    }
  }
}