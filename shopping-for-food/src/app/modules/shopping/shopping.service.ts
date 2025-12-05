import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Measurement } from 'src/app/models/ingredient';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  updateIngredients = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('milk', 1, Measurement.litre),
    new Ingredient('flour', 1, Measurement.kilogram),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredients.emit();
  }

  removeIngredient(name: string | undefined) {
    if (name) {
      this.ingredients = this.ingredients.filter(
        (ingredient) => ingredient.name !== name
      );
    } else {
      this.ingredients = [];
    }
    this.updateIngredients.emit();
  }
}
