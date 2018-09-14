import {initialState} from './currencyList.store';
import * as currencyListAction from './currencyList.action';
import {LoadCurrencyListSuccess} from './currencyList.action';
import {LoadCurrencyListBinanceSuccess} from './currencyList.action';

export function reducer(state = initialState, action: currencyListAction.Actions) {
  switch (action.type) {
    case currencyListAction.LOAD_CURRENCY_LIST_SUCCESS:
      const newList = (action as LoadCurrencyListSuccess).payload;
      return {
        ...state,
        list: [...state.list, ...newList]
      };
    case currencyListAction.LOAD_CURRENCY_LIST_BINANCE_SUCCESS:
      const binanceHash = (action as LoadCurrencyListBinanceSuccess).payload;
      return {
        ...state,
        list: state.list.map(coin => {
            const btcSymbol = coin.symbol + 'BTC', ethSymbol = coin.symbol + 'ETH';
            coin.isOnBinance = !!(binanceHash[btcSymbol] || binanceHash[ethSymbol]);
            return coin;
          })
      };
    default:
      return state;
  }
}
