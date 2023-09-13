import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[] | null, q: string | null) {
    if (!value) return [];
    if (!q) return value;
    if (q === 'name')
      value.sort(function (a: ProductType, b: ProductType) {
        if (a.productName < b.productName) {
          return -1;
        }
        if (a.productName > b.productName) {
          return 1;
        }
        return 0;
      });
    else
      value.sort(function (a: ProductType, b: ProductType) {
        console.log(a.productPrice, b.productPrice);
        return a.productSalePrice - b.productSalePrice;
      });

    return value;
  }
}
