import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('https://pizza.angular.schule/pizzas');
  }
}
