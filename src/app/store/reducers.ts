import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromCurrencyListStore from './currencyList/currencyList.store';
import * as fromCurrencyListReducer from './currencyList/currencyList.reducer';

export interface State {
  currencyList: fromCurrencyListStore.State;
}

export const reducers:  ActionReducerMap<State> = {
  currencyList: fromCurrencyListReducer.reducer
};

export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

/** SELECTORS */

export const getCurrencyListState =
  createFeatureSelector<fromCurrencyListStore.State>('currencyList');
