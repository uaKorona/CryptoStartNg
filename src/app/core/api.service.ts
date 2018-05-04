import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import Currency from '../models/Currency';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  doCoinmarketRequest(url): Observable<Currency[]> {
    return this.http
      .get<Currency[]>(url)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  getCoinmarketUrl(start?: string): string {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';
    if (start && parseInt(start, 10)) {
      return url + '&start=' + (+start + 1);
    }
    return url;
  }

}
