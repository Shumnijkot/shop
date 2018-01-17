import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable()
export class ProductsService {

  productList: any[];

  constructor() {
    this.initProductList();
  }

  initProductList(){
    let productList = new Array();
    productList.push(new Product('apart', 12));
    productList.push(new Product('monster', 13));
    productList.push(new Product('plane', 3));
    this.productList = productList;
  }

  getProducts(){
    return this.productList;
  }

  getProductByName(name){
    let productList = this.getProducts();
    let found = productList.find((product)=>{
      return product.name === name;
    });
    return found;
  }

}
