import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {CurrencyListComponent} from './currency-list/currency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
