import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {
  @Input({required:true})  code : string = 'INR';
  @Input({required:true})  price !: number;
  @Input({required:true})  sellingPrice !: number;
  
}
