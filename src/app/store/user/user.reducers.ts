import {initialUserState} from './user.store';
import {UserActions, UserActionsEnum, UserLoginFail, UserRegisterFail} from './user.actions';
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

    case UserActionsEnum[UserActionsEnum.REGISTER_USER_SUCCESS]:
      const newUser = new User(action.payload);

      return {
        ...state,
        userList: [...state.userList, newUser],
        userError: null
      };

    case UserActionsEnum[UserActionsEnum.LOGIN_USER_FAIL]:
    case UserActionsEnum[UserActionsEnum.REGISTER_USER_FAIL]:
      const userError = (action as UserLoginFail | UserRegisterFail).payload;
      return {
        ...state,
        userError
      };

    default:
      return state;
  }
}
