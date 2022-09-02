import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cupcakes',
      'Cook cupcakes',
      'https://lh4.googleusercontent.com/-DEPzmAuYMcU/TXUNqrtAUKI/AAAAAAAAAfM/2kWB-sk5y5U/s1600/white+cupcakes+2.JPG'
    ),
    new Recipe(
      'Bacon',
      'fry it',
      'https://family.redoubtnews.com/wp-content/uploads/sites/2/2021/02/bacon.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
