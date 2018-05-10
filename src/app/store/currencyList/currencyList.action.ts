import { Action } from '@ngrx/store';
import Currency from '../../models/Currency';

export const GET_CURRENCY_LIST_ACT = 'GET_CURRENCY_LIST_ACT';
export const LOAD_CURRENCY_LIST_ACT = 'LOAD_CURRENCY_LIST_ACT';
export const APPEND_TO_CURRENCY_LIST_ACT = 'APPEND_TO_CURRENCY_LIST_ACT';
export const GET_CURRENCY_LIST_BINANCE_ACT = 'GET_CURRENCY_LIST_BINANCE_ACT';

export class LoadCurrencyListAct implements Action {
  readonly type = LOAD_CURRENCY_LIST_ACT;
  constructor(public payload: string) {}
}

export class GetCurrencyListAct implements Action {
  readonly type = GET_CURRENCY_LIST_ACT;
  constructor(public payload: Currency[]) {}
}

export class AppendToCurrencyListAct implements Action {
  readonly type = APPEND_TO_CURRENCY_LIST_ACT;
  constructor(public payload: Currency[]) {}
}

export type Actions = GetCurrencyListAct | AppendToCurrencyListAct;
