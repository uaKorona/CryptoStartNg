import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  UserActionsEnum,
  UserLogin,
  UserLoginFail,
  UserLoginSuccess,
  UserRegister,
  UserRegisterFail,
  UserRegisterSuccess
} from './user.actions';
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
      withLatestFrom(this.store$.select(getUserList),
        (action: UserLogin, userList: User[]) => {
          const {payload} = action;
          const foundUser = userList.find(user =>
            user.id === payload.id
          );
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


  @Effect()
  registerUser$ = this.actions$
    .pipe(
      ofType(UserActionsEnum[UserActionsEnum.REGISTER_USER]),
      withLatestFrom(
        this.store$.select(getUserList),
        (action: UserRegister, userList: User[]) => {
          const {payload} = action;
          const foundUser = userList.find(user => user.name === payload.name);

          if (foundUser) {
            return new UserRegisterFail('User with that name has already registered');
          }

          const id = User.createUserId(this.getMaxUserId(userList));
          const newUser = new User({
            id,
            name: payload.name,
            password: payload.password
          });

          this.store$.dispatch(new UserRegisterSuccess(newUser));

          return new UserLoginSuccess(newUser);
        }
      ),
      catchError(error => of(error))
    );

  private showNotification(message: string, type: MessageTypeEnum) {
    const config = {
      duration: 5000,
      panelClass: type
    };

    this.snackBar.open(message, '', config);
  }

  private getMaxUserId(userList: User[]): string {
    const ids = userList.map(user => +user.id);

    return Math.max.apply(null, ids);
  }

}
