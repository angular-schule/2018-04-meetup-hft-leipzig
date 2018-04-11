import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pizzas: Pizza[];

  constructor() {
  }

  ngOnInit() {
    this.pizzas = [
      {
        id: 1,
        name: 'Hawaii',
        description: 'Schinken und Ananas',
        price: 10.99,
        rating: 3
      },
      {
        id: 1,
        name: 'Funghi',
        description: 'Pilzeeeee',
        price: 8.99,
        rating: 5
      }
    ];
  }

}
