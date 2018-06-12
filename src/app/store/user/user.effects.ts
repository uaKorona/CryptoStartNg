import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserActionsEnum, UserLogin, UserLoginFail, UserLoginSuccess} from './user.actions';
import {catchError, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {getUserList} from './user.selectors';
import {User} from '../../models/User';
import {NavigationService} from '../../core/navigation.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private navigationService: NavigationService) {
  }

  @Effect()
  loginUser$ = this.actions$
    .pipe(
      ofType(UserActionsEnum[UserActionsEnum.LOGIN_USER]),
      withLatestFrom(
        this.store$.select(getUserList),
        (action: UserLogin, userList: User[]) => {
          const {payload} = action;
          const foundUser = userList.find(user => user.id === payload.id);

          if (foundUser) {
            if (foundUser.password === payload.password) {
              this.navigationService.goHome();
              return new UserLoginSuccess(foundUser);
            }
            return new UserLoginFail('Password is invalid.');
          }

          return new UserLoginFail('User is not found.');
        }
      ),
      catchError(error => of(error))
    );
}
