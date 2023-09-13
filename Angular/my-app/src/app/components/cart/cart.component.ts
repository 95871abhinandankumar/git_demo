import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { CartItem, ProductType } from 'src/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems!: CartItem[];
  curr$!: Observable<string>;
  code: string = 'USD';
  count = 1;
  totalCount: number = 0;
  totalAmount: number = 0;

  constructor(private currencyService: CurrencyService) {}
  ngOnInit(): void {
    this.currencyService.currencyObservable.subscribe((code) => {
      this.code = code;
    });
    this.cartItems = JSON.parse(localStorage.getItem('cartItem') as string);

    if (this.cartItems) {
      for (let item of this.cartItems) {
        console.log(item.product.productSalePrice);
        this.totalAmount += item.product.productSalePrice * item.count;
        this.totalCount += item.count;
      }
    }
  }

  updateStorage() {
    if (this.cartItems) {
      //   let index = 0;
      //   for (let item of this.cartItems) {
      //     if (item.product.productId === item.product.productId) {
      //       break;
      //     }
      //     index += 1;
      //   }
      //   this.cartItems = [
      //     ...this.cartItems.slice(0, index),
      //     { ...cartItem },
      //     ...this.cartItems.slice(index + 1),
      //   ];
      this.totalAmount = 0;
      this.totalCount = 0;
      if (this.cartItems) {
        for (let item of this.cartItems) {
          console.log(item.product.productSalePrice);
          this.totalAmount += item.product.productSalePrice * item.count;
          this.totalCount += item.count;
        }
      }
      localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
    }
  }
  updateQuantity(cartItem: any) {
    let input: HTMLInputElement | null = document.querySelector(
      '#count' + cartItem.product.productId
    );
    if (input)
      if (parseInt(input?.value) < 1) {
        input.value = '1';
        cartItem.count = 1;
      }

    if (input) cartItem.count = parseInt(input.value);
    this.updateStorage();
  }

  stepUp(item: CartItem) {
    let input: HTMLInputElement | null = document.querySelector(
      '#count' + item.product.productId
    );
    item.count += 1;
    if (input) this.count = parseInt(input.value) + 1;
    console.log('step Up working ...', input, this.count);
    this.updateStorage();
  }
  stepDown(item: CartItem) {
    let input: HTMLInputElement | null = document.querySelector(
      '#count' + item.product.productId
    );

    if (input?.value === '1') return;

    item.count -= 1;
    if (input) this.count = parseInt(input.value) + 1;
    console.log('step down working ...', input, this.count);
    this.updateStorage();
  }

  deleteItem(item: CartItem) {
    if (this.cartItems) {
      let index = 0;
      for (let item of this.cartItems) {
        if (item.product.productId === item.product.productId) {
          break;
        }
        index += 1;
      }

      this.cartItems = [
        ...this.cartItems.slice(0, index),
        ...this.cartItems.slice(index + 1),
      ];
    }
    this.updateStorage();
  }
}
