import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/dto/cartproduct.model';
import { Product } from 'src/app/dto/product.model';
import { CartService } from '../../service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: cartProduct[] = [
  ];

  constructor(private cartService: CartService, private http: HttpClient) {
    // this.cartService.cartItems$.subscribe((item)=>{
    //   this.cartItem = item;
    // })
  }
  ngOnInit(): void {
    const tempItem: cartProduct[] = [];
    const token = window.localStorage.getItem('isLoggedIn');
    this.http.get<{ [key: string]: cartProduct[] }>(`https://shop-hub-user-default-rtdb.firebaseio.com/${token}_product.json`)
      .subscribe((data) => {
        for (const key in data) {
          const productItems = data[key];
          tempItem.push(...productItems);
        }
      })
    this.cartItem = tempItem;
  }


  totalCustomer(): number {
    let totalSum = 0;
    for (const key in this.cartItem) {
      totalSum += this.cartItem[key].count * this.cartItem[key].price;
    }
    return totalSum;
  }

  removeOnClick(idx: number) {
    this.cartItem = this.cartItem.filter((_, index) => index != idx);
  }

  incrementCount(idx: number) {
    this.cartItem[idx].count = this.cartItem[idx].count + 1;
    if (this.cartItem[idx].count < 0) {
      this.cartItem[idx].count = 0;
    }
  }

  decrementCount(idx: number) {
    this.cartItem[idx].count = this.cartItem[idx].count - 1;
    if (this.cartItem[idx].count < 0) {
      this.cartItem[idx].count = 0;
    }
  }

  SaveOn() {
    const token = window.localStorage.getItem('isLoggedIn');
    console.log(token);
    this.http.delete(`https://shop-hub-user-default-rtdb.firebaseio.com/${token}_product.json`)
      .subscribe((data) => {
        console.log('Deleted Successfully');
      })
    this.http.post(`https://shop-hub-user-default-rtdb.firebaseio.com/${token}_product.json`, this.cartItem)
      .subscribe((data) => {
        console.log('successfully saved ');
      })
  }
}
