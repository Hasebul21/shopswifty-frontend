// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartProduct } from '../dto/cartproduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<cartProduct[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: cartProduct) {
    const currentItems = this.cartItemsSubject.getValue();
    console.log( typeof currentItems);
    let found : boolean = false;
    currentItems.forEach((data)=>{
       if(data.key === item.key){
         data.count++;
         found = true;
       }
    })
    if(!found) this.cartItemsSubject.next([...currentItems, item]);
  }
}
