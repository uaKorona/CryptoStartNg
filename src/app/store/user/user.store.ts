import {User} from '../../models/User';
import {userListMock} from './userList.mock';

export interface UserState {
  currentUser: User;
  userList: User[];
}

export const initialUserState: UserState = {
  currentUser: new User({name: 'initUser'}),
  userList: userListMock.map(userMock => new User(userMock))
};
