import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
