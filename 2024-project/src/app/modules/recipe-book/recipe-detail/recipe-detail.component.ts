import { Component, inject, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipe: Recipe;

  shoppingService = inject(ShoppingService);

  ngOnInit(): void {}

  addIngredients() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
