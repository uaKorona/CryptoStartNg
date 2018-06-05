import {Component, OnInit} from '@angular/core';
import {TabOption} from '../models/TabOption';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tabOptions: TabOption[] = [];

  constructor() {
    this.tabOptions = [
      new TabOption(this.getLoginTabConfig()),
      new  TabOption()
    ];
  }

  ngOnInit() {
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
      }
    };
  }

}
