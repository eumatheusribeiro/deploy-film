import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormatterEnum } from '../../../shared/enums/number-formatter-enum';
import { formatPercentage, formatTime } from '../../../utils/number-formatter';

@Pipe({
  name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {
  transform(value: number, type: NumberFormatterEnum): string {
    switch(type) {
      case NumberFormatterEnum.PORCENTAGEM:
        return formatPercentage(value)
      case NumberFormatterEnum.HORARIO:
        return formatTime(value)
      default:
        return value.toString()
    }
  }
}
