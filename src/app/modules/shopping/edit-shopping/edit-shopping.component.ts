import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { takeLast } from 'rxjs';
import { Ingredient, Measurement } from 'src/app/models/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-edit-shopping',
  templateUrl: './edit-shopping.component.html',
  styleUrls: ['./edit-shopping.component.css'],
})
export class EditShoppingComponent implements OnInit {
  service = inject(ShoppingService);
  measurements = Object.values(Measurement);
  ngOnInit(): void {}

  onAddIngredient(
    name: HTMLInputElement,
    amount: HTMLInputElement,
    measurement: HTMLInputElement
  ): void {
    this.service.addIngredients([
      new Ingredient(
        name.value,
        Number(amount.value),
        measurement.value as Measurement
      ),
    ]);
  }

  onRemoveIngredient(name: HTMLInputElement): void {
    if (name.value) {
      // Condition required because the input element can be empty.
      this.service.removeIngredient(name.value);
    }
  }

  onRemoveAll(): void {
    this.service.removeIngredient(undefined);
  }
}
