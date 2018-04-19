import {initialState} from '../currencyList.store';
import * as currencyListAction from '../actions/currencyList.action';

export function reducer(state = initialState, action: currencyListAction.Action) {
  switch (action.type) {
    case currencyListAction.GET_CURRENCY_LIST_ACT:
      return {
        ...state
      };
    default:
      return state;
  }
}
