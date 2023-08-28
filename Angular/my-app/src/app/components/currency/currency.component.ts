import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  codes!: any;
  // @Output() currencySelected = new EventEmitter();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('data')) this.getAllCodes();
    else {
      this.codes = JSON.parse(localStorage.getItem('codes') as string);
    }
  }

  getSelectedCode(event: Event) {
    const ele = event.target as HTMLSelectElement;
    // this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value);
  }

  getAllCodes() {
    this.currencyService.getForexData().subscribe((data) => {
      this.codes = data.codes;
      localStorage.setItem('codes', JSON.stringify(this.codes));
      localStorage.setItem('data', JSON.stringify(data.data));
    });
  }
}
