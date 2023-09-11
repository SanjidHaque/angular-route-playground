import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router,private route: ActivatedRoute) { }

  goToOrders() {
    this.router.navigate(['orders'],
      { relativeTo: this.route, queryParams: { tag: 1, id: 1 }, fragment: 'top' });
    // defining relative route, query params, fragments
  }

  goToAnotherOrder() {
    this.router.navigate(['orders'],
      {
        relativeTo: this.route,
        queryParams: { ticket: 2 },
        queryParamsHandling: 'merge',
        preserveFragment: true,
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
}
