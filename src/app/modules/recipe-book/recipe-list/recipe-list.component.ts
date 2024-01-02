import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import generateId from 'src/app/utils/idGenerator';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  onSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
