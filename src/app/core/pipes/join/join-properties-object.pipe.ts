import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinPropertiesObject'
})
export class JoinPropertiesObjectPipe implements PipeTransform {
  transform(value: any[],separator: string, property: string): string {
    if(value == null) return ''
    separator ?? ''
    if(value.length == 1) return value[0][property]
    return value.map((item) => item[property]).join(separator)
  }
}
