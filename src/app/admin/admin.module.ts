import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StocksComponent} from './stocks/stocks.component';
import {BillingsComponent} from './billings/billings.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [
    StocksComponent,
    BillingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
