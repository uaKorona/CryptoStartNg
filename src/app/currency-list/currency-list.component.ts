import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducers';
import Currency from '../models/Currency';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {getCurrencyList} from '../store/currencyList/currencyList.selectors';
import {User} from '../models/User';
import {getCurrentUser} from '../store/user/user.selectors';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Currency>;
  displayedColumns: string[];
  currentUser: User;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store$: Store<State>,
  ) {

    this.displayedColumns = this.getDisplayedColumns();

    this
      .store$
      .select(getCurrencyList)
      .subscribe((currencyList: Currency[]) => {
          this.dataSource = new MatTableDataSource(currencyList);
          this.initPaginator(this.paginator);
          /** update paginator every time when new currency list is got */
        }
      );

    this
      .store$
      .select(getCurrentUser)
      .subscribe((currentUser: User) => {
          this.currentUser = currentUser;
          this.displayedColumns = this.getDisplayedColumns();
        }
      );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initPaginator(this.paginator);
  }

  isUserAuthorized(): boolean {
    return this.currentUser && this.currentUser.isUserAuthorized();
  }

  private getDisplayedColumns(): string[] {
    return this
      .getInitColumns()
      .filter(column => {
        if (this.isUserAuthorized()) {
          return true;
        }
        return column !== 'isOnBinance';
      });
  }

  private getInitColumns(): string [] {
    return [
      'rank',
      'name',
      'market_cap_usd',
      'price_usd',
      'isOnBinance',
      'percent_change_24h',
      'imageSrc'
    ];
  }

  private initPaginator(paginator: MatPaginator): void {
    if (paginator) {
      this.dataSource.paginator = paginator;
    }
  }

}
