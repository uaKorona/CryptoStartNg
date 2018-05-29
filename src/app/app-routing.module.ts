import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CurrencyListResolverService} from './currency-list/currency-list-resolver.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyListComponent,
    resolve: {
      currencyList: CurrencyListResolverService
    }
  },
  {
    path: 'login',
    component: LoginComponent
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
