import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CurrencyListActions from '../currencyList/currencyList.action';

import {ApiService} from '../../core/api.service';
import Currency from '../../models/Currency';

import {concatMap, map} from 'rxjs/operators';


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
      ofType(CurrencyListActions.LOAD_CURRENCY_LIST_ACT),
      concatMap((action: CurrencyListActions.LoadCurrencyListAct) =>
        this.apiService.doCoinmarketRequest(action.payload)
          .pipe(
            map((currencyList: Currency[]) =>
              new CurrencyListActions.GetCurrencyListAct(currencyList)
            )
          )
      )
    );

}


