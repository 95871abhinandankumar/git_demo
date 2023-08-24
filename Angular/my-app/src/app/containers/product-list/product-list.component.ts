import { Component } from '@angular/core';
import { ProductType } from 'src/types';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  plist:ProductType[]=[{
    productId:100,
    productImage:'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
    productName:'test',
    productPrice:100,
    productSalePrice:120,
    productStock: 2,
  }, {
    productId:101,
    productImage:'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
    productName:'test2',
    productPrice:200,
    productSalePrice:300,
    productStock: 3,
  },
]

  addItem(data:any){
    console.log("Item Added", data.id, data.name);
  }
}
