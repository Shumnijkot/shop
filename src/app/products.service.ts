import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable()
export class ProductsService {

  productList: any[];

  constructor() {
    this.initProductListIfNone();
    this.addCoupleOfProducts();
  }

  initProductListIfNone(){
    if(!this.productList) {
      this.productList = new Array();
    }
  }

  addCoupleOfProducts(){
    this.productList.push(new Product('apart', 12));
    this.productList.push(new Product('monster', 13));
    this.productList.push(new Product('plane', 3));
  }

  addProduct(name, ammount){
    this.initProductListIfNone();
    if(!name) {
      return false;
    }
    this.productList.push(new Product(name, ammount))
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
