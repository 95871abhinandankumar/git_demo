import {
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem, ProductType } from 'src/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnChanges {
  data2!: string;
  plist!: ProductType[] | null;
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$!: Observable<string>;
  product$!: Observable<ProductType[]>;
  query: string | null = null;
  sortBy: string | null = null;
  page: number = 1;
  currentPage: number = 1;

  constructor(
    private productService: ProductService,
    private currencyService: CurrencyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //Method-3 to using async
    //<div class="row" *ngif="curr$ | async as mycode">
    //</div>
    this.curr$ = this.currencyService.currencyObservable;
    //<div *ngFor="let item of product$ | async " class="col-md-3 p-4">
    //</div>
    this.product$ = this.productService.getProducts();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('data changes');
  }
  ngOnInit(): void {
    this.getData();

    this.activatedRoute.queryParamMap.subscribe((object) => {
      this.currentPage =
        object.has('page') && /^\d+$/.test(object.get('page') as string)
          ? parseInt(object.get('page') as string)
          : 1;

      console.log('Current page : ', this.currentPage);
      this.query = object.has('search') ? object.get('search') : null;
      this.sortBy = object.has('sort') ? object.get('sort') : null;
    });

    //for accessing current page

    //method-1
    this.currencyService.currencyObservable.subscribe((code) => {
      this.data2 = code;
    });

    //method-2
    this.currencyService.currencyObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((code) => {
        this.data2 = code;
      });
  }

  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.plist = data;
      },
      (err) => {
        console.log('Error', err);
      }
    );

    return null;
  }

  addItem(data: any) {
    const product: ProductType = { ...data };
    console.log(localStorage.getItem('cartItem'));

    if (localStorage.getItem('cartItem')) {
      let cartArr: CartItem[] = JSON.parse(
        localStorage.getItem('cartItem') as string
      );
      let flag = false;
      for (let item of cartArr) {
        if (item.product.productId === product.productId) {
          item.count += 1;
          flag = true;
          break;
        }
      }

      if (!flag) {
        let item: CartItem = { product: product, count: 1 };
        cartArr.push(item);
      }

      localStorage.setItem('cartItem', JSON.stringify(cartArr));
    } else {
      let items = [];
      let item: CartItem = { product: product, count: 1 };
      items.push(item);
      localStorage.setItem('cartItem', JSON.stringify(items));
    }

    console.log(JSON.parse(localStorage.getItem('cartItem') as string));

    this.router.navigateByUrl('/cart');
  }

  updateData() {
    if (!this.plist) return;

    const product: ProductType = this.plist[0];
    product.productSalePrice = 90;

    this.plist = [{ ...product }, this.plist[1]];
  }
}
function takeUntilDestroy(): import('rxjs').OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}
