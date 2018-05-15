import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import Currency from '../models/Currency';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {of} from 'rxjs/observable/of';
import * as CurrencyListActions from '../store/currencyList/currencyList.action';
import {ApiService} from '../core/api.service';
import {delay, tap} from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Currency>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<fromRoot.State>,
    private apiService: ApiService,
  ) {

    this
      .store
      .select(fromRoot.getCurrencyList)
      .subscribe((currencyList: Currency[]) =>
        this.dataSource = new MatTableDataSource(currencyList)
      );

    of(null)
      .pipe(
        delay(300),
        tap(() => {
            const url = this.apiService.getCoinmarketUrl(100);
            this.store.dispatch(new CurrencyListActions.LoadCurrencyList(url));
          }
        )
      )
      .subscribe(val => console.log(val));
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  isUserAuthorized(): boolean {
    return false;
  }

  getDisplayedColumns(): string[] {
    return this
      .getInitColumns()
      .filter(column => {
        if (this.isUserAuthorized()) {
          return true;
        }
        return column !== 'isOnBinance';
      });
  }

  private getInitColumns(): string [] {
    return [
      'rank',
      'name',
      'market_cap_usd',
      'price_usd',
      'isOnBinance',
      'percent_change_24h',
      'imageSrc'
    ];
  }

}
