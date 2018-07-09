import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import Currency from '../models/Currency';
import * as currencyListImagesHash from '../store/currencyList/currencyListImagesHash';
import {BCoinSimple} from '../models/BCoinSimple';
import {BCoin24} from '../models/BCoin24';


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

  doBinanceRequest() {
    const url = '/binance/api/v3/ticker/price';

    return this.http
      .get(url)
      .pipe(
        map(binanceList => this.getHashFromBinanceList(binanceList as any [])),
        catchError(error => Observable.throw(error.json()))
      );
  }

  getBinanceCurrencyDetail(coinSymbol: string): Observable<BCoin24> {
    const binanceApiUrl = (symbol) => `/binance/api/v1/ticker/24hr?symbol=${symbol}`;

    return this.http
      .get(binanceApiUrl(coinSymbol))
      .pipe(map(data => new BCoin24(data)));
  }

  private parseCurrencyList() {
    return (items: Currency[]): Currency[] => items.map(item => {
      const currency = new Currency(item);
      currency.imageSrc = currencyListImagesHash.getImageUrl(currency.id);
      return currency;
    });
  }

  private getHashFromBinanceList (binanceList = []) {
    const hash = {};
    binanceList
      .forEach(bCoin => {
        hash[bCoin.symbol] = new BCoinSimple(bCoin);
      });
    console.log(hash);
    return hash;
  }
}
