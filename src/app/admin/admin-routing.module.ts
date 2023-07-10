import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {authGuard} from '../auth.guard';
import {BillingsComponent} from './billings/billings.component';
import {StocksComponent} from './stocks/stocks.component';
import {RouterModule} from '@angular/router';

const routes = [
  { path: '', component: AdminComponent, canActivate: [authGuard], children: [
      { path: '',
        children: [
          { path: 'billings', component: BillingsComponent },
          { path: 'stocks', component: StocksComponent }
        ]
      }
    ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
