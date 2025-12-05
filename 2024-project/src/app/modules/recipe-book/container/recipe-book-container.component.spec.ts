import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookContainerComponent as RecipeBookContainerComponent } from './recipe-book-container.component';

describe('RecipeBookComponent', () => {
  let component: RecipeBookContainerComponent;
  let fixture: ComponentFixture<RecipeBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeBookContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
