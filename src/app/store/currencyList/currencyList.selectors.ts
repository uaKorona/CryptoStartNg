import * as CurrencyListStore from './currencyList.store';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './currencyList.store';

export const getCurrencyListState =
  createFeatureSelector<CurrencyListStore.State>('currencyList');

export const getCurrencyList = createSelector(getCurrencyListState,
  (state: State) => state.list
);
