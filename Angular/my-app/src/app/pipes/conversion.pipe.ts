import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion',
})
export class ConversionPipe implements PipeTransform {
  constructor() {}
  transform(value: number, code: string = 'INR') {
    if (isNaN(value)) return null;
    else {
      // switch (code) {
      //   case 'USD':
      //     return (value *= 0.012);
      //   case 'EUR':
      //     return (value *= 0.011);
      //   case 'GBP':
      //     return (value *= 0.0096);
      //   default:
      //     return value;
      // }
      const data = JSON.parse(localStorage.getItem('data') as string);
      return (data[code] *= value);
    }
  }
}
