import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../core/api.service';
import {Injectable} from '@angular/core';

import 'rxjs/add/observable/from';
import * as fromRoot from '../store/reducers';
import {Action, Store} from '@ngrx/store';
import * as CurrencyListActions from '../store/currencyList/currencyList.action';
import {Actions} from '@ngrx/effects';
import 'rxjs/add/operator/take';

@Injectable()
export class CurrencyListResolverService implements Resolve<Action> {
  constructor(
    private apiService: ApiService,
    private store: Store<fromRoot.State>,
    private action$: Actions
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> {
    const url = this.apiService.getCoinmarketUrl();
    this.store.dispatch(new CurrencyListActions.LoadCurrencyListAct(url));

    return this.action$
      .ofType(CurrencyListActions.GET_CURRENCY_LIST_ACT)
      .take(1);

  }

}
