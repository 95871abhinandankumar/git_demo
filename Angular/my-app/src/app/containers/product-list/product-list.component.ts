import { Component, Input } from '@angular/core';
import { ProductType } from 'src/types';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input({required:true}) data2 !: string;

  plist:ProductType[]=[{
    productId:100,
    productImage:'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
    productName:'test',
    productPrice:120,
    productSalePrice:100,
    productStock: 2,
  }, {
    productId:101,
    productImage:'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-orignal-imag2gzkexzqhyhu.jpeg?q=70',
    productName:'test2',
    productPrice:300,
    productSalePrice:200,
    productStock: 3,
  },
]

  addItem(data:any){
    console.log("Item Added", data.id, data.name);
  }

  updateData(){
    const product:ProductType = this.plist[0];
    product.productSalePrice = 90;

    this.plist = [{...product}, this.plist[1]];
  }
}
