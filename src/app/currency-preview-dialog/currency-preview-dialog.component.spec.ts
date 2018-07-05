import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPreviewDialogComponent } from './currency-preview-dialog.component';

describe('CurrencyPreviewDialogComponent', () => {
  let component: CurrencyPreviewDialogComponent;
  let fixture: ComponentFixture<CurrencyPreviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyPreviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
