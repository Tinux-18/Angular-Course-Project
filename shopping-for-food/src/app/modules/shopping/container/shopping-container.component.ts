import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css'],
})
export class ShoppingContainerComponent implements OnInit {
  ingredients: Ingredient[] = [];
  service = inject(ShoppingService);

  ngOnInit(): void {
    this.ingredients = this.service.getIngredients();
    this.service.updateIngredients.subscribe(() => {
      this.ingredients = this.service.getIngredients();
    });
  }
}
