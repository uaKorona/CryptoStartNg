import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import {Observable} from 'rxjs/Observable';
import Currency from '../models/Currency';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  currencyList$: Observable<Currency[]>;
  displayedColumns = [
    'rank',
    'name',
    'market_cap_usd',
    'price_usd',
    'isOnBinance',
    'percent_change_24h',
    'imageSrc'
  ];
  dataSource;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.currencyList$ = this.store.select(fromRoot.getCurrencyList);
    this
      .store
      .select(fromRoot.getCurrencyList)
      .subscribe((currencyList: Currency[]) =>
        this.dataSource = new MatTableDataSource(currencyList)
      );
  }

  ngOnInit() {
  }

  isUserAuthorized(): boolean {
    return true;
  }

  getDisplayedColumns(): string[] {
    return this
      .displayedColumns
      .filter(column => {
        if (this.isUserAuthorized()) {
          return true;
        }
        return column !== 'isOnBinance';
    });
  }

}
