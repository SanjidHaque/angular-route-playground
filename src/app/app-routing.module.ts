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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'user', component: UserComponent, children: [
      {
        path: '',
        children: [
          { path: 'orders', component: OrdersComponent },
          { path: 'profile', component: ProfileComponent }
        ]
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
