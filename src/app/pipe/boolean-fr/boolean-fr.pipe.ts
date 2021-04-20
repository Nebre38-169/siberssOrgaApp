import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanFr'
})
export class BooleanFrPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(value){
      return 'oui';
    } else {
      return 'non';
    }
  }

}
