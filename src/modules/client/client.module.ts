import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ComodityDetailComponent } from './components/comodity-detail/comodity-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';



@NgModule({
  declarations: [HomeComponent, ComodityDetailComponent, CartDetailsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
