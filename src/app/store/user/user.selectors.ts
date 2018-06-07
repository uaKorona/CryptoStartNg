import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.store';

const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(getUserState, getCurrentUserState);

function getCurrentUserState(state: UserState) {
  return state.currentUser;
}

