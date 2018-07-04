import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {State} from '../store/reducers';
import {select, Store} from '@ngrx/store';
import {getCurrentUser} from '../store/user/user.selectors';
import {User} from '../models/User';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {NavigationService} from '../core/navigation.service';

@Injectable()
export class SettingsCanActivateService implements CanActivate {
  constructor(private store: Store<State>, private navigationService: NavigationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(getCurrentUser),
      map((currentUser: User) => {
        if (!currentUser.isUserAuthorized()) {
          console.warn('user is not authorized! Go home');
          this.navigationService.goHome();
          return false;
        }
        return true;
      })
    );
  }

}
