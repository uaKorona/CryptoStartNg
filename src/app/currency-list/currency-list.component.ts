import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import {Observable} from 'rxjs/Observable';
import Currency from '../models/Currency';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  currencyList$: Observable<Currency[]>;
  currencyList: Currency[];

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute
  ) {
    this.currencyList$ = this.store.select(fromRoot.getCurrencyList);
  }

  ngOnInit() {
    this.currencyList = this.route.snapshot.data.currencyList;
  }

}
