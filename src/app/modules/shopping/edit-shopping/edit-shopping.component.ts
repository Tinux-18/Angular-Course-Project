import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { takeLast } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-edit-shopping',
  templateUrl: './edit-shopping.component.html',
  styleUrls: ['./edit-shopping.component.css'],
})
export class EditShoppingComponent implements OnInit {
  @Output() updateIngredients = new EventEmitter();
  service = inject(ShoppingService);

  ngOnInit(): void {}

  onAddIngredient(
    name: HTMLInputElement,
    amount: HTMLInputElement,
    measurement: HTMLInputElement
  ): void {
    this.service.addIngredient(
      new Ingredient(name.value, Number(amount.value), measurement.value)
    );
    this.updateIngredients.emit();
  }

  onRemoveIngredient(name: HTMLInputElement): void {
    if (name.value) {
      // Condition required because the input element can be empty
      this.service.removeIngredient(name.value);
    }
    this.updateIngredients.emit();
  }

  onRemoveAll(): void {
    this.service.removeIngredient(undefined);
    this.updateIngredients.emit();
  }
}
