import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.store';

const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getUserState,
  (state: UserState) => state.currentUser
);

export const getUserList = createSelector(
  getUserState,
  (state: UserState) => state.userList
);

export const findUserById = (userId: string) =>
  createSelector(
    getUserState,
    (state: UserState) => state.userList.find(user => user.id === userId)
  );





