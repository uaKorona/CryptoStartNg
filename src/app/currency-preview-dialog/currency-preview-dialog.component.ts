import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import Currency from '../models/Currency';

@Component({
  selector: 'app-currency-preview-dialog',
  templateUrl: './currency-preview-dialog.component.html',
  styleUrls: ['./currency-preview-dialog.component.css']
})
export class CurrencyPreviewDialogComponent implements OnInit {

  coin: Currency;
  pairCoin = 'BTC';

  constructor(
    public dialogRef: MatDialogRef<CurrencyPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { coin: Currency }
    ) {
    this.coin = this.data.coin;
  }

  ngOnInit() {
    console.log(this.data);
  }

}
