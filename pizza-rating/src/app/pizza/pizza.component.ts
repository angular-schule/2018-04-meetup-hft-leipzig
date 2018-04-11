import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza;
  @Output() rate = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.pizza.rating++;
    this.rate.emit(this.pizza);
  }

  rateDown() {
    this.pizza.rating--;
    this.rate.emit(this.pizza);
  }

}
