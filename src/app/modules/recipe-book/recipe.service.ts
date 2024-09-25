import { EventEmitter } from '@angular/core';
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
    },
    {
      id: generateId(),
      name: 'Bacon',
      description: 'fry it',
      imagePath:
        'https://family.redoubtnews.com/wp-content/uploads/sites/2/2021/02/bacon.jpg',
    },
  ];

  getRecipes() {
    // Use slice to return a copy of the recipes array
    return this.recipes.slice();
  }
}
