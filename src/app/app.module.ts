import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListComponent } from './modules/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { EditShoppingComponent } from './modules/shopping/edit-shopping/edit-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    EditShoppingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
