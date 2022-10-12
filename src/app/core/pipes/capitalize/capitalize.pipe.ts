import { Pipe, PipeTransform } from '@angular/core';
import { StringCapitalize } from '../../../utils/string-formatter';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, allWords = false): string {
    if(value == null) return value

    if(allWords) {
      const words = value.split(' ')
      const complete = words.map((word) => {
        return StringCapitalize(word)
      })
      return complete.join(' ')
    }

    return StringCapitalize(value)
  }
}
