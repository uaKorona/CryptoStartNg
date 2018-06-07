import {Action} from '@ngrx/store';

export enum UserActionsEnum {
  LOGIN_USER
}

export class UserLogin implements Action {
  readonly type = UserActionsEnum[UserActionsEnum.LOGIN_USER];

  constructor(public payload: any) {
  }
}

export type UserActions =
  | UserLogin;

