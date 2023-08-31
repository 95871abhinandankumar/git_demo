import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/types';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  querry!: string;

  transform(value: any[] | null, q: string | null) {
    if (!value) return null;
    if (!q) return value;

    return value.filter((item: ProductType) => item['productName'].includes(q));
  }
}
