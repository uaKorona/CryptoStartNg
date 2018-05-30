import {Component, OnInit, ViewChild} from '@angular/core';

interface IMatTab {
  position: number | null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('tab1') tab1: IMatTab;
  @ViewChild('tab2') tab2: IMatTab;

  constructor() { }

  ngOnInit() {
    this.tab1.position = 0;
  }

}
