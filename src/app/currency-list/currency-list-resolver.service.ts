import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import Currency from '../models/Currency';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../core/api.service';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/do';
import * as fromRoot from '../store/reducers';
import {Store} from '@ngrx/store';
import * as CurrencyListActions from '../store/currencyList/currencyList.action';

@Injectable()
export class CurrencyListResolverService implements Resolve<Currency[]> {
  constructor(
    private apiService: ApiService,
    private store: Store<fromRoot.State>
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Currency[]> | Promise<Currency[]> | Currency[] {
    const url = this.apiService.getCoinmarketUrl();
    return this.apiService
      .doCoinmarketRequest(url)
      .do((currencyList: Currency[]) => {
        this.store.dispatch(new CurrencyListActions.GetCurrencyListAct(currencyList));
      });
  }
}
