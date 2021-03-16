import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComodityDetailComponent } from './components/comodity-detail/comodity-detail.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: ComodityDetailComponent },
  { path: 'mycart', component: CartDetailsComponent },
  { path: '', redirectTo: 'mycart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
