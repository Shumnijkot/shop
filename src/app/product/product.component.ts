import { Component, OnInit } from '@angular/core';

enum Category {
  cat1,
  cat2,
  cat3
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string = 'Product Component';
  description: string = 'Some component';
  price: number = 1;
  isAvailable: boolean = true;
  category = Category;
  ingredients: string[] = ['claw', 'fang', 'tooth', 'fur', 'tail'];

  constructor() {
  }

  ngOnInit() {
  }

}
