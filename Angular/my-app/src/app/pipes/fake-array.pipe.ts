import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fakeArray',
})
export class FakeArrayPipe implements PipeTransform {
  transform(value: Number) {
    return new Array(value);
  }
}
