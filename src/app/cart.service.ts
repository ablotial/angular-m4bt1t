import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  shipping;

  addToCart(product) {
    this.items.push(product);
  }

  addShipping(shipping) {
    this.shipping = shipping;
  }

  getShipping() {
    return this.shipping;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor( private http: HttpClient ) { }

}