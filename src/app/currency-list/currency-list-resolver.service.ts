import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import Currency from '../models/Currency';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../core/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CurrencyListResolverService implements Resolve<Currency[]> {
  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Currency[]> | Promise<Currency[]> | Currency[] {
    const url = this.apiService.getCoinmarketUrl();
    return this.apiService.doCoinmarketRequest(url);
  }
}
