import {Action} from '@ngrx/store';
import Currency from '../../models/Currency';

export const LOAD_CURRENCY_LIST = 'LOAD_CURRENCY_LIST';
export const LOAD_CURRENCY_LIST_SUCCESS = 'LOAD_CURRENCY_LIST_SUCCESS';
export const LAZY_LOAD_CURRENCY_LIST = 'LAZY_LOAD_CURRENCY_LIST';
export const LAZY_LOAD_CURRENCY_LIST_SUCCESS = 'LAZY_LOAD_CURRENCY_LIST_SUCCESS';
export const LOAD_CURRENCY_LIST_BINANCE_SUCCESS = 'LOAD_CURRENCY_LIST_BINANCE_SUCCESS';

export class LoadCurrencyList implements Action {
  readonly type = LOAD_CURRENCY_LIST;

  constructor(public payload: string) {
  }
}

export class LoadCurrencyListSuccess implements Action {
  readonly type = LOAD_CURRENCY_LIST_SUCCESS;

  constructor(public payload: Currency[]) {
  }
}

export class LazyLoadCurrencyList implements Action {
  readonly type = LAZY_LOAD_CURRENCY_LIST;
}

export class LazyLoadCurrencyListSuccess implements Action {
  readonly type = LAZY_LOAD_CURRENCY_LIST_SUCCESS;
}

export class LoadCurrencyListBinanceSuccess implements Action {
  readonly type = LOAD_CURRENCY_LIST_BINANCE_SUCCESS;
  constructor(public payload: any = {}) {
  }
}

export type Actions =
  | LoadCurrencyList
  | LoadCurrencyListSuccess
  | LazyLoadCurrencyList
  | LazyLoadCurrencyListSuccess
  | LoadCurrencyListBinanceSuccess;
