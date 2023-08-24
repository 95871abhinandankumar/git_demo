import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  code = 'USD';
  @Input({required:true}) data!:ProductType;
  @Output() btnClick = new EventEmitter();
  notifyParent(event:any){
    console.log(event);

    //this take at max one parameter so if you have multiple please pass as object
    this.btnClick.emit({id:this.data.productId, name:this.data.productName});
  }
}
