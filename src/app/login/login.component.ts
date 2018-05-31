import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tabForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.tabForm = fb.group({
      firstInput: ['aaa', Validators.required],
      secondInput: ['bbb']
    });
  }

  ngOnInit() {
  }

}
