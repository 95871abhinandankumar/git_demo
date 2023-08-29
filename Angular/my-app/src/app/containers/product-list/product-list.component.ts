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
import { ProductType } from 'src/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnChanges {
  data2!: string;
  plist!: ProductType[];
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$!: Observable<string>;
  product$!: Observable<ProductType[]>;

  constructor(
    private productService: ProductService,
    private currencyService: CurrencyService,
    private router: Router
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
    console.log('Item Added', data.id, data.name);
    this.router.navigateByUrl('/cart');
  }

  updateData() {
    const product: ProductType = this.plist[0];
    product.productSalePrice = 90;

    this.plist = [{ ...product }, this.plist[1]];
  }
}
function takeUntilDestroy(): import('rxjs').OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}
