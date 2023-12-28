import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/dto/product.model';
import { CartService } from '../../service/cart.service';
import { cartProduct } from '../../dto/cartproduct.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
   product : Product[] = [
   ];

   constructor(private http : HttpClient, private cartService : CartService){}

   ngOnInit(): void {
     this.http.get<{[key: string]: Product}>('https://shop-hub-user-default-rtdb.firebaseio.com/product.json')
       .subscribe((data)=>{
           for(const key in data){
              if(data.hasOwnProperty(key)){
                 data[key].key = key;
                 this.product.push(data[key]);
              }
           }
       })
   }

   addToCart(i : number){
    let cartProduct: cartProduct = {
      name: this.product[i].title,
      description: this.product[i].description,
      price: this.product[i].price,
      count: 1
    };
     this.cartService.addToCart(cartProduct);
   }

}
