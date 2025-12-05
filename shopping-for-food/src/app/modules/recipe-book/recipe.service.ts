import { EventEmitter } from '@angular/core';
import { Ingredient, Measurement } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import generateId from 'src/app/shared/helpers/idGenerator';

export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      id: generateId(),
      name: 'Cupcakes',
      description: 'Cook cupcakes',
      imagePath:
        'https://lh4.googleusercontent.com/-DEPzmAuYMcU/TXUNqrtAUKI/AAAAAAAAAfM/2kWB-sk5y5U/s1600/white+cupcakes+2.JPG',
      ingredients: [
        new Ingredient('milk', 1, Measurement.litre),
        new Ingredient('flour', 1, Measurement.kilogram),
      ],
    },
    {
      id: generateId(),
      name: 'Bacon',
      description: 'fry it',
      imagePath:
        'https://family.redoubtnews.com/wp-content/uploads/sites/2/2021/02/bacon.jpg',
      ingredients: [
        new Ingredient('oil', 1, Measurement.litre),
        new Ingredient('bacon', 1, Measurement.kilogram),
      ],
    },
  ];

  getRecipes() {
    // Use slice to return a copy of the recipes array
    return this.recipes.slice();
  }
}
