import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducers';
import Currency from '../models/Currency';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {getCurrencyList} from '../store/currencyList/currencyList.selectors';
import {User} from '../models/User';
import {getCurrentUser} from '../store/user/user.selectors';
import {CurrencyPreviewDialogComponent} from '../currency-preview-dialog/currency-preview-dialog.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Currency>;
  displayedColumns: string[];
  currentUser: User;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store$: Store<State>, private dialog: MatDialog
  ) {
    this.displayedColumns = this.getDisplayedColumns();

    this
      .store$
      .select(getCurrencyList)
      .subscribe((currencyList: Currency[]) => {
          this.dataSource = new MatTableDataSource(currencyList);
          /** update paginator every time when new currency list is got */
          this.initPaginator(this.paginator);
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

  ngAfterViewInit(): void {
    this.initPaginator(this.paginator);
  }

  isUserAuthorized(): boolean {
    return this.currentUser && this.currentUser.isUserAuthorized();
  }

  applyFilter(searchString: string) {
    const stringFilter = searchString
      .trim() // Remove whitespace
      .toLowerCase(); // MatTableDataSource defaults to lowercase matches

    if (this.dataSource) {
      this.dataSource.filter = stringFilter;
    }
  }

  clickOnBinanceCoin(coin: Currency) {
    if (coin.isOnBinance) {
      this.dialog
        .open(CurrencyPreviewDialogComponent, {
          width: '500px',
          disableClose: true,
          data: {coin}
        });
    }
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
