import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { PizzaStoreService } from '../shared/pizza-store.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private ps: PizzaStoreService) {
  }

  ngOnInit() {
    this.ps.getAll().subscribe(pizzas => {
      this.pizzas = pizzas;
    });

  }

}
