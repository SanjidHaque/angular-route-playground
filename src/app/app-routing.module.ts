import { NgModule } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  Routes,
  withRouterConfig,
  withComponentInputBinding,
  UrlSegment
} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

import {OrdersComponent} from './user/orders/orders.component';
import {ProfileComponent} from './user/profile/profile.component';
import {authGuard} from './auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'admin',
    title: 'Admin',
    canMatch: [authGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'users',
    title: 'Users',
    component: UserComponent,
    children: [
      {
        path: '',
        children: [
          { path: ':id/orders', title: 'Orders', component: OrdersComponent },
          {
            matcher: (url) => {
              if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
                return {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}};
              }
              return null;
            },
            component: ProfileComponent
          }
        ]
      }
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false,
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled', scrollOffset: [0, 64] }
  )],
  exports: [RouterModule],
  providers: [provideRouter(routes,
    withRouterConfig({ onSameUrlNavigation: 'ignore' }),
    withComponentInputBinding()
  )]
})
export class AppRoutingModule { }
