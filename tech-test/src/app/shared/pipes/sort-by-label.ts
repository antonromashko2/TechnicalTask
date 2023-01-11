import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortByLabel'
})
export class SortByLabel implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort((n1,n2) =>
    {
      return n1.label - n2.label;
    });
  }
}
