export const GET_CURRENCY_LIST_ACT = 'GET_CURRENCY_LIST_ACT';
export const APPEND_TO_CURRENCY_LIST_ACT = 'APPEND_TO_CURRENCY_LIST_ACT';
export const GET_CURRENCY_LIST_BINANCE_ACT = 'GET_CURRENCY_LIST_BINANCE_ACT';

export class GetCurrencyListAct {
  readonly type = GET_CURRENCY_LIST_ACT;
}

export class AppendToCurrencyListAct {
  readonly type = APPEND_TO_CURRENCY_LIST_ACT;
}

export type Action = GetCurrencyListAct | AppendToCurrencyListAct;
