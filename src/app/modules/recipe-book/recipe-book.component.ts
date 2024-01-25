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
    if (this.selectedRecipe && this.selectedRecipe.id === recipe.id) {
      // If the same recipe is clicked twice
      // close the details
      this.selectedRecipe = undefined;
    } else {
      this.selectedRecipe = recipe;
    }
  }
}
