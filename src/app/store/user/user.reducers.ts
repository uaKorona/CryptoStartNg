import {initialUserState} from './user.store';
import {UserActions, UserActionsEnum, UserLoginFail} from './user.actions';
import {User} from '../../models/User';

export function reducer(state = initialUserState, action: UserActions) {
  switch (action.type) {

    case UserActionsEnum[UserActionsEnum.LOGIN_USER_SUCCESS]:
      const currentUser = new User(action.payload);
      currentUser.setAuthorized();

      return {
        ...state,
        currentUser,
        userError: null
      };

    case UserActionsEnum[UserActionsEnum.LOGIN_USER_FAIL]:
      const userError = (action as UserLoginFail).payload;
      return {
        ...state,
        userError
      };

    default:
      return state;
  }
}
