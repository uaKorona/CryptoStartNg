import {UserStatesEnum} from './UserStatesEnum';

export interface ISimpleUser {
  id?: string;
  name?: string;
  password?: string;
}

export class User {
  id: string;
  name: string;
  password: string;
  private state: UserStatesEnum = UserStatesEnum.nonAuthorized;

  static createUserId(maxExistentId) {
    return maxExistentId + 1 + '';
  }

  constructor(obj: ISimpleUser = {}) {
    const {id, name, password} = obj;
    Object.assign(this, {id, name, password});
  }

  setAuthorized() {
    this.state = UserStatesEnum.authorized;
  }

  setNonAuthorized() {
    this.state = UserStatesEnum.nonAuthorized;
  }

  isUserAuthorized() {
    return this.state === UserStatesEnum.authorized;
  }

}
