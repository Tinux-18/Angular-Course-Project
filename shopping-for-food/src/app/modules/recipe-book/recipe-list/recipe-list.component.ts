import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import generateId from '../../../shared/helpers/idGenerator';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  service = inject(RecipeService);

  ngOnInit(): void {
    this.recipes = this.service.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.service.selectRecipe.emit(recipe);
  }
}
