import {initialState} from './currencyList.store';
import * as currencyListAction from './currencyList.action';

export function reducer(state = initialState, action: currencyListAction.Actions) {
  switch (action.type) {
    case currencyListAction.LOAD_CURRENCY_LIST_SUCCESS:
      const newList = action.payload;
      return {
        ...state,
        list: newList
      };
    default:
      return state;
  }
}
