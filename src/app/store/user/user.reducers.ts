import {initialUserState} from './user.store';
import {UserActions, UserActionsEnum} from './user.actions';

export function reducer(state = initialUserState, action: UserActions) {
  switch (action.type) {
    case UserActionsEnum[UserActionsEnum.LOGIN_USER]:
      return {
        ...state
      };

    default:
      return state;
  }
}
