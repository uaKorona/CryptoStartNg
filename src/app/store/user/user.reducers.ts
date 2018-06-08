import {initialUserState} from './user.store';
import {UserActions, UserActionsEnum} from './user.actions';
import {User} from '../../models/User';

export function reducer(state = initialUserState, action: UserActions) {
  switch (action.type) {
    case UserActionsEnum[UserActionsEnum.LOGIN_USER_SUCCESS]:
      const currentUser = new User(action.payload);
      currentUser.setAuthorized();

      return {
        ...state, currentUser
      };

    default:
      return state;
  }
}
