import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserActionsEnum, UserLogin, UserLoginFail, UserLoginSuccess} from './user.actions';
import {catchError, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {getUserList} from './user.selectors';
import {User} from '../../models/User';
import {NavigationService} from '../../core/navigation.service';
import {MatSnackBar} from '@angular/material';

enum MessageTypeEnum {
  login = 'blue--background',
  register = 'green--background'
}

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private snackBar: MatSnackBar,
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

          if (!foundUser) {
            return new UserLoginFail('User is not found.');
          }

          if (foundUser.isPasswordCorrect(payload.password)) {
            return new UserLoginSuccess(foundUser);
          }

          return new UserLoginFail('Password is invalid.');

        }
      ),
      catchError(error => of(error))
    );


  @Effect({dispatch: false})
  loginUserSuccess$ = this.actions$
    .pipe(
      ofType(UserActionsEnum[UserActionsEnum.LOGIN_USER_SUCCESS]),
      tap(() => {
        this.navigationService
          .goHome()
          .then(() =>
            this.showNotification('Login successful', MessageTypeEnum.login)
          );
      })
    );

  private showNotification(message: string, type: MessageTypeEnum) {
    const config = {
      duration: 5000,
      panelClass: type
    };

    this.snackBar.open(message, '', config);
  }

}
