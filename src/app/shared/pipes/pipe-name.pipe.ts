import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: any[]): any {
    return value.map(auxValue => auxValue.name).join('\n');
  }

}
