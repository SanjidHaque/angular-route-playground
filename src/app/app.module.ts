import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrdersComponent } from './user/orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TitleStrategy} from '@angular/router';
import {TemplatePageTitleStrategy} from './template-page-title-strategy';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ProfileComponent,
    OrdersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
