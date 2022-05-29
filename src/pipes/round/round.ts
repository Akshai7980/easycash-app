import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number): number {
    return Math.round(value);
}
}
