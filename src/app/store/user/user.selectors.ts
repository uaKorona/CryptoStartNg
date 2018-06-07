import {createFeatureSelector, createSelector} from '@ngrx/store';
import {getCurrUserHelper, UserState} from './user.store';

const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(getUserState, getCurrUserHelper);
