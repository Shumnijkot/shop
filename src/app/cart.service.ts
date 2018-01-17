import { Injectable } from '@angular/core';

import { ProductsService } from './products.service';

@Injectable()
export class CartService {
  reservedProducts: any[];
  constructor(private productsService: ProductsService) { }
  reserveProduct(name){
    let product = this.productsService.getProductByName(name);
    if(!product){
      return false;
    }
    let reservedProducts = new Array();
    reservedProducts.push(product);
    this.reservedProducts = reservedProducts;
    return true;
  }
  getReservedProducts(){
    return this.reservedProducts;
  }

}
