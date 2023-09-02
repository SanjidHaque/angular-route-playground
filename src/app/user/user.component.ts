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
    this.router.navigate(['orders'], { relativeTo: this.route }); // defining relative route
  }
}
