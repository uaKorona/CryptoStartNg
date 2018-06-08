import {Action} from '@ngrx/store';
import {ISimpleUser} from '../../models/User';

export enum UserActionsEnum {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER
}

export class UserLogin implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER];
  constructor(public payload: ISimpleUser) {}
}

export class UserLoginSuccess implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER_SUCCESS];
  constructor(public payload: ISimpleUser) {}
}

export class UserRegister implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.REGISTER_USER];
  constructor(public payload: ISimpleUser) {}
}

export type UserActions =
  | UserLogin
  | UserRegister;

