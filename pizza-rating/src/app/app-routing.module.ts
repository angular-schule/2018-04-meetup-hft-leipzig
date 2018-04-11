import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pizza/:id', component: PizzaDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
