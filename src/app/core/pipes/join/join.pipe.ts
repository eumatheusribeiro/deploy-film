import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(value: any[],separator?: string): string {
    if(value == null) return ''
    separator ?? ''
    return value.join(separator)
  }
}
