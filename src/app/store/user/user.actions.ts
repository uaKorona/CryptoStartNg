import {Action} from '@ngrx/store';
import {ISimpleUser} from '../../models/User';

export enum UserActionsEnum {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
}

export class UserLogin implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER];
  constructor(public payload: ISimpleUser) {}
}

export class UserLoginSuccess implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER_SUCCESS];
  constructor(public payload: ISimpleUser) {}
}

export class UserLoginFail implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER_FAIL];
  constructor(public payload: string) {}
}

export class UserRegister implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.REGISTER_USER];
  constructor(public payload: ISimpleUser) {}
}

export class UserRegisterSuccess implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.REGISTER_USER_SUCCESS];
  constructor(public payload: ISimpleUser) {}
}

export class UserRegisterFail implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.REGISTER_USER_FAIL];
  constructor(public payload: string) {}
}

export type UserActions =
  | UserLogin
  | UserRegister;

