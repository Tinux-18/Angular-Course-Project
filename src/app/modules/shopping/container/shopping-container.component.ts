import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css'],
})
export class ShoppingContainerComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('milk', 1, 'l'),
    new Ingredient('flour', 1, 'kg'),
  ];
  constructor() {}

  ngOnInit(): void {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(name: string | undefined) {
    if (name) {
      this.ingredients = this.ingredients.filter(
        (ingredient) => ingredient.name !== name
      );
    } else {
      this.ingredients = [];
    }
  }
}
