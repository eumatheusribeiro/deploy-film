import { Pipe, PipeTransform } from '@angular/core';
import { LanguageEnum } from './language-name.enum';

@Pipe({
  name: 'languageName'
})
export class LanguageNamePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(!value) return ''
    switch(value) {
      case LanguageEnum.EN:
      return 'English'
      case LanguageEnum.KO:
      return 'Korean'
    }
    return value;
  }
}
