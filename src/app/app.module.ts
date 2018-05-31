import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {CurrencyListEffects} from './store/currencyList/currencyList.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './my-material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CurrencyListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    MyMaterialModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([CurrencyListEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
