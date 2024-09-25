import { Ingredient } from 'src/app/models/ingredient';

export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient('milk', 1, 'l'),
    new Ingredient('flour', 1, 'kg'),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

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
