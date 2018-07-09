import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Currency from '../models/Currency';
import {BCoin24} from '../models/BCoin24';
import {ApiService} from '../core/api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-currency-preview-dialog',
  templateUrl: './currency-preview-dialog.component.html',
  styleUrls: ['./currency-preview-dialog.component.css']
})
export class CurrencyPreviewDialogComponent implements OnInit {

  coin: Currency;
  bCoin$: Observable<BCoin24>;
  pairCoin = 'BTC';
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<CurrencyPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { coin: Currency },
    private apiService: ApiService
  ) {
    this.coin = this.data.coin;
    this.loading = true;
    const binanceSymbol = this.coin.symbol + this.pairCoin;

    this.bCoin$ = this.apiService
      .getBinanceCurrencyDetail(binanceSymbol)
      .pipe(tap(() => {
        this.loading = false;
        })
      );

  }

  ngOnInit() {
    console.log(this.data);
  }

}
