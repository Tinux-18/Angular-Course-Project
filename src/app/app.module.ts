import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookContainerComponent } from './modules/recipe-book/container/recipe-book-container.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListComponent } from './modules/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingContainerComponent } from './modules/shopping/container/shopping-container.component';
import { EditShoppingComponent } from './modules/shopping/edit-shopping/edit-shopping.component';
import { RecipeItemComponent } from './modules/recipe-book/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookContainerComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingContainerComponent,
    EditShoppingComponent,
    RecipeItemComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
