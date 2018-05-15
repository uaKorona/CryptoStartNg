import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import Currency from '../models/Currency';
import * as currencyListImagesHash from '../store/currencyList/currencyListImagesHash';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  doCoinmarketRequest(url): Observable<Currency[]> {
    return this.http
      .get<Currency[]>(url)
      .pipe(
        map(this.parseCurrencyList()),
        catchError(error => Observable.throw(error.json()))
      );
  }

  getCoinmarketUrl(start?: number): string {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';
    if (start) {
      return url + '&start=' + (start + 1);
    }
    return url;
  }

  private parseCurrencyList() {
    return (items: Currency[]): Currency[] => items.map(item => {
      const currency = new Currency(item);
      currency.imageSrc = currencyListImagesHash.getImageUrl(currency.id);
      return currency;
    });
  }
}
