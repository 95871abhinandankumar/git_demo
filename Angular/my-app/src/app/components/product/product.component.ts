import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  code = 'USD';
  @Input({ required: true }) data!: ProductType;
  @Input({ required: true }) data3!: string;
  @Output() btnClick = new EventEmitter();
  @Output() btnClick2 = new EventEmitter();
  notifyParent(event: any) {
    console.log(event);

    //this take at max one parameter so if you have multiple please pass as object
    this.btnClick.emit(this.data);
  }

  changeData() {
    this.btnClick2.emit();
  }
}
