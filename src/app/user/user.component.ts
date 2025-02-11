import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.route.snapshot.data);
  }

  goToOrders() {
    this.router.navigate([1 , 'orders', { optional: 99 }],
      { relativeTo: this.route, queryParams: { tag: 1, token: 1 }, fragment: 'footer' });

    // Another way around
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { session_id: 1111 },
    //   fragment: 'footer',
    //   relativeTo: this.route
    // };
    // this.router.navigate([1 , 'orders'], navigationExtras);

    // We can also pass same query params with different values like { tag: ['bar', 'baz'] }
    // defining relative route, query params, fragments
  }

  goToAnotherOrder() {
    this.router.navigate(['1/orders'],
      {
        relativeTo: this.route,
        queryParams: { ticket: 2 },
        queryParamsHandling: 'replace',
        preserveFragment: false
      });
    // using queryParamsHandling with merge strategy. default is '', preserve wont change the current params
    // using preserve fragments too, preserve won't change the current fragments
  }

  stayOnUsers() {
    this.router.navigate(['../users'],
      {
        onSameUrlNavigation: 'reload',
      });
  }

  goToOrderFooter() {
    this.router.navigate(['users/1/orders'], { fragment: 'post-footer' });
  }

  openInventorySupport() {
    this.router.navigate([{outlets: { primary: 'users/1/orders', chatbox: 'inventory-support'} }]);
  }

  closeInventorySupport() {
    this.router.navigate([{outlets: { primary: 'users/1/orders', chatbox: null} }]);
  }

  ngOnDestroy() {
    this.router.navigate([{outlets: { chatbox: null} }]);
  }
}
