import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CurrencyListActions from '../currencyList/currencyList.action';

import {ApiService} from '../../core/api.service';
import Currency from '../../models/Currency';

import {concatMap, delay, map, mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';


@Injectable()
export class CurrencyListEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }

  @Effect()
  loadCurrencyList$ = this.actions$
    .pipe(
      ofType(CurrencyListActions.LOAD_CURRENCY_LIST),
      concatMap((action: CurrencyListActions.LoadCurrencyList) =>
        this.apiService.doCoinmarketRequest(action.payload)
          .pipe(
            map((currencyList: Currency[]) =>
              new CurrencyListActions.LoadCurrencyListSuccess(currencyList)
            )
          )
      )
    );

  @Effect()
  loadCurrencyListLazy$ = this.actions$
    .pipe(
      ofType(CurrencyListActions.LAZY_LOAD_CURRENCY_LIST),
      concatMap(() =>
        forkJoin(
          this.dispatchLoadCurrencyList(100),
          this.dispatchLoadCurrencyList(200),
        )
          .pipe(
            mergeMap(([currencyList1, currencyList2]) =>
              [
                new CurrencyListActions.LoadCurrencyListSuccess([...currencyList1, ...currencyList2]),
                new CurrencyListActions.LazyLoadCurrencyListSuccess()
              ]
            )
          )
      )
    );

  @Effect()
  loadCurrencyListBinance$ = this.actions$
    .pipe(
      ofType(CurrencyListActions.LAZY_LOAD_CURRENCY_LIST_SUCCESS),
      concatMap(() =>
        this.apiService.doBinanceRequest()
          .pipe(
            map((binanceHash: any) =>
              new CurrencyListActions.LoadCurrencyListBinanceSuccess(binanceHash)
            )
          )
      )
    );

  private dispatchLoadCurrencyList(start: number) {
    const url = this.apiService.getCoinmarketUrl(start);
    return this.apiService.doCoinmarketRequest(url)
      .pipe(
        delay(300)
      );
  }

}


