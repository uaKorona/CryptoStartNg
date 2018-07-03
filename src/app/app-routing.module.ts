import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CurrencyListResolverService} from './currency-list/currency-list-resolver.service';
import {LoginComponent} from './login/login.component';
import {RouterPath} from './constants/router-path.constant';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {
    path: RouterPath.home,
    component: CurrencyListComponent,
    resolve: {
      currencyList: CurrencyListResolverService
    }
  },
  {
    path: RouterPath.login,
    component: LoginComponent
  },
  {
    path: RouterPath.settings,
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [
    CurrencyListResolverService
  ]
})
export class AppRoutingModule {
}
