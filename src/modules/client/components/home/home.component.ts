import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/modules/shared/models/shoes';
import { CartService } from 'src/modules/shared/services/cart.service';
import { KalaService } from 'src/modules/shared/services/kala.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: KalaService,private cartService:CartService) {}

  ngOnInit(): void {
    this.getKalaList();    
  }

  KalaList!: Shoes[];
  cartList: any = [];
  cartBadgeNumber = 0;
  getKalaList() {
    this.service.get().subscribe((res) => {
      this.KalaList = res;
    });
  }
  addToCart(product: any) {
    this.cartService.add(product);
  }
}
