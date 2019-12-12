import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        name: 'Product 1',
        quantity: 2,
        price: 120
      },
      {
        name: 'Product 2',
        quantity: 3,
        price: 130
      }
    ];
  }
}
