import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any = [];
  cart: Subject<any> = new Subject<any>();
  constructor() {
    this.cart.subscribe((value) => {
      this.cartList = value;
    });
  }

  get() {
    return this.cartList;
  }
  add(product: any) {
    this.cartList = JSON.parse(localStorage.getItem('cartItems') + '');

    if (this.cartList !== null) {
      console.log(
        '🚀 ~ file: cart.service.ts ~ line 21 ~ CartService ~ add ~ this.cartList',
        this.cartList
      );
      console.log(product.id)
      let filterResult = this.cartList.filter(
        (item: any) => {return item.id === product.id;}
      );
      console.log(filterResult)
      if (filterResult.length!=0) {
        for (let index = 0; index < this.cartList.length; index++) {
          if (this.cartList[index].id == product.id) {
            this.cartList[index].count += 1;
            localStorage.setItem('cartItems', JSON.stringify(this.cartList));
          }
        }
      } else {
        console.log("not found")
        product.count = 1;
        this.cartList.push(product);
        localStorage.setItem('cartItems', JSON.stringify(this.cartList));
      }
    } else {
      product.count = 1;
      this.cartList = [];
      this.cartList.push(product);
      localStorage.setItem('cartItems', JSON.stringify(this.cartList));
    }
    console.log(
      '🚀 ~ file: cart.service.ts ~ line 14 ~ CartService ~ add ~ this.cartList',
      this.cartList
    );
    this.cart.next(this.cartList);
  }
  remove(product: any) {
    this.cartList = this.cartList.filter((el: any) => {return el.id != product.id});
    localStorage.setItem('cartItems', JSON.stringify(this.cartList));
  }
  decreaseCartCount(product: any) {
    for (let index = 0; index < this.cartList.length; index++) {
      if (this.cartList[index].id === product.id) {
        this.cartList[index].count--;
        // this.cartList[index]=this.cartList[index];
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartList));
  }
}
