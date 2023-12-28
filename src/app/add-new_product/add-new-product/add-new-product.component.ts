import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/dto/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

    product: Product =  {title : 'Laptop Stand', description : 'Wow', price : 19.99, image_src : '../../../assets/laptop_stand.jpg'};
    constructor(private http : HttpClient){}
  ngOnInit(): void {
     
  }
    addProduct(){
       console.log(this.product);
       this.http.post('https://shop-hub-user-default-rtdb.firebaseio.com/product.json', this.product)
       .subscribe((data)=>{
         console.log('successfully stored');
       })
    }
}
