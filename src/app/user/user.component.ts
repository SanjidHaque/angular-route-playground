import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToOrders() {
    this.router.navigate([1 , 'orders', { optional: 99 }],
      { relativeTo: this.route, queryParams: { tag: 1, token: 1 }, fragment: 'top' });

    // We can also pass same query params with different values like { tag: ['bar', 'baz'] }
    // defining relative route, query params, fragments
  }

  goToAnotherOrder() {
    this.router.navigate(['1/orders'],
      {
        relativeTo: this.route,
        queryParams: { ticket: 2 },
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
    // using queryParamsHandling with merge strategy. default is '', preserve wont change the current params
    // using preserve fragments too, preserve wont change the current fragments
  }

  stayOnUsers() {
    this.router.navigate(['../users'],
      {
        onSameUrlNavigation: 'reload'
      });
  }

  onActivate(event: any) {
    console.log('Router outlet activated event => ', event);
  }

  onDeactivate(event: any) {
    console.log('Router outlet deactivated event => ', event);
  }
}
