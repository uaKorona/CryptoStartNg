import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromCurrencyListStore from './currencyList/currencyList.store';
import * as fromCurrencyListReducer from './currencyList/currencyList.reducer';
import {UserState} from './user/user.store';
import * as fromUserReducer from './user/user.reducers';

export interface State {
  currencyList: fromCurrencyListStore.State;
  user: UserState;
}

export const reducers:  ActionReducerMap<State> = {
  currencyList: fromCurrencyListReducer.reducer,
  user: fromUserReducer.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];
