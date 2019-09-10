import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undefinedStrings'
})
export class UndefinedStringsPipe implements PipeTransform {

  transform(value: string): any {
    if (value === undefined) {
      return '-';
    } else {
      return value;
    }
  }

}
