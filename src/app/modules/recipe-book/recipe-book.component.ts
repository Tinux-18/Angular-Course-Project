import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSelect(recipe: Recipe) {
    if (this.selectedRecipe & (this.selectedRecipe.id === recipe.id)) {
      this.selectedRecipe = undefined;
    } else {
      this.selectedRecipe = recipe;
    }
  }
}
