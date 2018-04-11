import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaStoreService } from './shared/pizza-store.service';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PizzaComponent,
    PizzaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PizzaStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
