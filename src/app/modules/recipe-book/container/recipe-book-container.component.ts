import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book-container',
  templateUrl: './recipe-book-container.component.html',
  styleUrls: ['./recipe-book-container.component.css'],
  providers: [RecipeService],
})
export class RecipeBookContainerComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  service = inject(RecipeService);

  ngOnInit(): void {
    this.service.selectRecipe.subscribe((recipe: Recipe) => {
      this.showRecipe(recipe);
    });
  }

  showRecipe(recipe: Recipe) {
    if (this.selectedRecipe && this.selectedRecipe.id === recipe.id) {
      // If the same recipe is clicked twice
      // close the details
      this.selectedRecipe = undefined;
    } else {
      this.selectedRecipe = recipe;
    }
  }
}
