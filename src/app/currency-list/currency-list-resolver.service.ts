import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../core/api.service';
import {Injectable} from '@angular/core';

import 'rxjs/add/observable/from';
import {Action, select, Store} from '@ngrx/store';
import * as CurrencyListActions from '../store/currencyList/currencyList.action';
import 'rxjs/add/operator/take';
import Currency from '../models/Currency';
import {filter, take, tap} from 'rxjs/operators';
import {getCurrencyList} from '../store/currencyList/currencyList.selectors';
import {State} from '../store/reducers';


@Injectable()
export class CurrencyListResolverService implements Resolve<Action> {
  constructor(private apiService: ApiService, private store: Store<State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const isStoreEmpty = (currencyList: any[]) => currencyList.length === 0;
    const isStoreNeededLazyLoading = (currencyList: any[]) => currencyList.length <= 100;

    return this.store.pipe(
      select(getCurrencyList),
      tap((currencyList: Currency[]) => {
        if (isStoreEmpty(currencyList)) {
          const url = this.apiService.getCoinmarketUrl();
          this.store.dispatch(new CurrencyListActions.LoadCurrencyList(url));
        }
      }),
      filter(currencyList => !isStoreEmpty(currencyList)),
      tap((currencyList: Currency[]) => {
        if (isStoreNeededLazyLoading(currencyList)) {
          this.store.dispatch(new CurrencyListActions.LazyLoadCurrencyList());
        }
      }),
      take(1)
    );
  }

}
