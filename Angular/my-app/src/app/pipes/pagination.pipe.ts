import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'pagination',
  pure: false,
})
export class PaginationPipe implements PipeTransform {
  transform(value: ProductType[], currentPage: number) {
    const len = value.length;
    let totalPage: number = Math.floor(len / 20 + (len % 20 > 0 ? 1 : 0));
    console.log('pagination pipe working && total_page : ', totalPage);
    if (currentPage > 0 && currentPage <= totalPage) {
      return value.slice((currentPage - 1) * 20, currentPage * 20);
    }

    return null;
  }
}
