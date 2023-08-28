import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, actualPrice : number){

    let x : number = Math.round((100 - value/actualPrice*100) * 100)/100;
    return x + "% off";
  }

}
