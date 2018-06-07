import * as fromCurrencyListStore from './currencyList.store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getCurrencyListState =
  createFeatureSelector<fromCurrencyListStore.State>('currencyList');

export const getCurrencyList = createSelector(getCurrencyListState, fromCurrencyListStore.getList);
