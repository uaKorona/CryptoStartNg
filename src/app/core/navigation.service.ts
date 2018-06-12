import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {RouterPath} from '../constants/router-path.constant';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {
  }

  private goTo(path) {
    return this.router.navigate([path]);
  }

  goHome() {
    return this.goTo(RouterPath.home);
  }

}
