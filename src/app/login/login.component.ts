import {Component, OnInit} from '@angular/core';
import {TabOption} from '../models/TabOption';
import {Validators} from '@angular/forms';
import {ITabPayload} from '../models/ITabPayload';

enum TabIndexEnum {
  Login = 0,
  Register = 1
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tabOptions: TabOption[] = [];
  selectedTabIndex = TabIndexEnum.Login;

  constructor() {
    this.tabOptions = [
      new TabOption(this.getLoginTabConfig()),
      new TabOption()
    ];
  }

  ngOnInit() {
  }

  onTabSubmit(payload: ITabPayload) {
    if (this.selectedTabIndex === TabIndexEnum.Login) {
      console.log('login:', payload);
    } else {
      console.log('register:', payload);
    }
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

}
