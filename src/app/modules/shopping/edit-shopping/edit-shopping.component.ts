import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { takeLast } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-edit-shopping',
  templateUrl: './edit-shopping.component.html',
  styleUrls: ['./edit-shopping.component.css'],
})
export class EditShoppingComponent implements OnInit {
  constructor() {}
  @Output() createIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<string | undefined>();

  ngOnInit(): void {}

  onAddIngredient(
    name: HTMLInputElement,
    amount: HTMLInputElement,
    measurement: HTMLInputElement
  ): void {
    this.createIngredient.emit(
      new Ingredient(name.value, Number(amount.value), measurement.value)
    );
  }
  onRemoveIngredient(name: HTMLInputElement): void {
    if (name.value) {
      // Condition required because the input element can be empty
      this.deleteIngredient.emit(name.value);
    }
  }
  onRemoveAll(): void {
    this.deleteIngredient.emit();
  }
}
