import {Component, OnInit} from '@angular/core';
import {State} from '../store/reducers';
import {Store} from '@ngrx/store';
import {getCurrentUser} from '../store/user/user.selectors';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  currentUser$: Observable<User>;

  constructor(
    private store$: Store<State>
  ) {
    this.currentUser$ = this.store$.select(getCurrentUser);
  }

  ngOnInit() {
  }

}
