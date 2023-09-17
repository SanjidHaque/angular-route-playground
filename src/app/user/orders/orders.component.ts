import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {

    // Accessing route params, query params and fragments in different ways
    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.paramMap);
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.queryParamMap);
    // console.log(this.route.snapshot.fragment);
    //
    // this.route.params.subscribe(console.log)
    // this.route.paramMap.subscribe(console.log)
    //
    // this.route.queryParams.subscribe(console.log)
    // this.route.queryParamMap.subscribe(console.log)
  }

  ngOnInit() {
  }
}

