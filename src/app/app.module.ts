import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CommonNavComponent } from './shared/common-nav/common-nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterNewUserComponent } from './registration/register-new-user/register-new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card/product-card.component';
import { AddNewProductComponent } from './add-new_product/add-new-product/add-new-product.component';
import { CartComponent } from './cart/cart/cart.component';


const routes : Routes = [
  { path : '', component : HomePageComponent },
  { path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterNewUserComponent},
  {path : 'add-new-product', component : AddNewProductComponent},
  {path : 'cart', component : CartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    CommonNavComponent,
    RegisterNewUserComponent,
    ProductCardComponent,
    AddNewProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CommonNavComponent
  ],
  bootstrap: [AppComponent,
  CommonNavComponent]
})
export class AppModule { }
