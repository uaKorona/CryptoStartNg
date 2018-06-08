import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserActionsEnum, UserLogin, UserLoginSuccess} from './user.actions';
import {concatMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Store} from '@ngrx/store';
import {State} from '../reducers';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>,) {
  }

  @Effect()
  loginUser$ = this.actions$
    .pipe(
      ofType(UserActionsEnum[UserActionsEnum.LOGIN_USER]),
      concatMap((action: UserLogin) => {
          /** DO SOME VERIFYING LOGIC */
          return of(new UserLoginSuccess(action.payload));
        }
      )
    );
}
