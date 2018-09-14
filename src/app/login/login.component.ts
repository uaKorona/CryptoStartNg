import {Component, OnInit} from '@angular/core';
import {TabOption} from '../models/TabOption';
import {Validators} from '@angular/forms';
import {ITabPayload} from '../models/ITabPayload';
import {Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {UserActions, UserLogin, UserRegister} from '../store/user/user.actions';
import {Observable} from 'rxjs/Observable';
import {getUserError} from '../store/user/user.selectors';

enum TabIndexEnum {
  Login = 0,
  Register = 1
}

const MIN_LENGTH = 5;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tabOptions: TabOption[] = [];
  selectedTabIndex = TabIndexEnum.Login;
  userError$: Observable<string | null>;

  constructor( private store$: Store<State> ) {
    this.tabOptions = this.getTabOptions();
    this.userError$ = this.store$.select(getUserError);
  }

  onTabSubmit(payload: ITabPayload) {
    const action: UserActions =
      (this.selectedTabIndex === TabIndexEnum.Login)
      ? this.getLoginAction(payload)
      : this.getRegisterAction(payload);

    this.store$.dispatch(action);
  }

  getLoginAction(payload: ITabPayload) {
    return new UserLogin({
      id: payload.firstInput,
      password: payload.secondInput
    });
  }

  getRegisterAction(payload: ITabPayload) {
    return new UserRegister({
      name: payload.firstInput,
      password: payload.secondInput
    });
  }

  private getTabOptions() {
    return [
      new TabOption(this.getLoginTabConfig()),
      new TabOption(this.getRegisterTabConfig())
    ];
  }

  private getLoginTabConfig() {
    return {
      name: 'Login',
      firstInputPlaceholder: 'Enter User ID',
      secondInputPlaceholder: 'Enter User Password',
      submitButtonName: 'Login',
      firstInputValidators: [
        Validators.required,
        Validators.pattern(/^\d+$/)
      ],
      firstInputErrorTable: {
        required: 'Required',
        pattern: 'Only numbers'
      },
      secondInputValidators: [
        Validators.required
      ],
      secondInputErrorTable: {
        required: 'Required'
      },
      submitButtonStyle: 'mat-primary'
    };
  }

  private getRegisterTabConfig() {
    return {
      name: 'Register',
      firstInputPlaceholder: 'Enter User Name',
      secondInputPlaceholder: 'Enter User Password',
      submitButtonName: 'Register',
      firstInputValidators: [
        Validators.required
      ],
      firstInputErrorTable: {
        required: 'Required'
      },
      secondInputValidators: [
        Validators.required,
        Validators.minLength(MIN_LENGTH)
      ],
      secondInputErrorTable: {
        required: 'Required',
        minlength: 'Min length should not be less then ' + MIN_LENGTH
      },
      submitButtonStyle: 'mat-primary'
    };
  }

}
