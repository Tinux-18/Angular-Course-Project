import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('milk', 1, 'l'),
    new Ingredient('flour', 1, 'kg'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
