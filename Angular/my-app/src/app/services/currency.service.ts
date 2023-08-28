import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable = this.currencySubject.asObservable();

  // constructor() {}

  // updateCurrency(code: string) {
  //   this._code = code;
  //   this.currencySubject.next(this._code);
  // }
  constructor(private http: HttpClient) {
    this.rehydrate();
  }

  getForexData() {
    const url =
      'https://api.forexrateapi.com/v1/latest?api_key=b850885518d50d83840bb3188c57c586&base=INR';

    return this.http.get(url).pipe(
      map((data: any) => {
        return { data: data.rates, codes: Object.keys(data.rates) };
      })
    );
  }

  rehydrate() {
    if (localStorage.getItem('currency')) {
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
  }
  // to make data changes
  updateCurrency(code: string) {
    this._code = code;
    this.persistNnotifyData();
  }
  persistNnotifyData() {
    localStorage.setItem('currency', this._code);
    // on every data change, we should give a notification
    this.currencySubject.next(this._code);
  }
}
