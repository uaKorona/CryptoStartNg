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
import { CustomTabComponent } from './login/custom-tab/custom-tab.component';
import {UserEffects} from './store/user/user.effects';
import { SettingsComponent } from './settings/settings.component';
import { CurrencyPreviewDialogComponent } from './currency-preview-dialog/currency-preview-dialog.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CurrencyListComponent,
    LoginComponent,
    CustomTabComponent,
    SettingsComponent,
    CurrencyPreviewDialogComponent
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
    EffectsModule.forRoot([CurrencyListEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  entryComponents: [
    CurrencyPreviewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
