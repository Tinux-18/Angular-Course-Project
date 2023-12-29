import { Component, OnInit } from '@angular/core';
import { Selection } from './models/selection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  toggleRecipes: boolean = false;
  toggleShoppingList: boolean = false;
  ngOnInit(): void {}

  onToggle(selection: Selection) {
    if (selection == Selection.recipes) {
      this.toggleRecipes = !this.toggleRecipes;
    } else {
      this.toggleShoppingList = !this.toggleShoppingList;
    }
  }
}
