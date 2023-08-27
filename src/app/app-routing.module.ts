import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {BillingsComponent} from './admin/billings/billings.component';
import {StocksComponent} from './admin/stocks/stocks.component';
import {OrdersComponent} from './user/orders/orders.component';
import {ProfileComponent} from './user/profile/profile.component';
import {authGuard} from './auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'admin', canMatch: [authGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'users', title: 'Users', component: UserComponent, children: [
      {
        path: '',
        children: [
          { path: 'orders', title: 'Orders', component: OrdersComponent },
          { path: 'profile', component: ProfileComponent }
        ]
      }
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
