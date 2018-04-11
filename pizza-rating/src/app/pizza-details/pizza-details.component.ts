import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaStoreService } from '../shared/pizza-store.service';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  pizza: Pizza;

  constructor(private route: ActivatedRoute, private ps: PizzaStoreService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.ps.getSingle(id).subscribe(pizza => {
      this.pizza = pizza;
    });
  }

}
