import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simple Recipe', 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Chicken-Korma-768x1152.jpg'),
    new Recipe('Test Recipe 2', 'This is simple Recipe', 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Chicken-Korma-768x1152.jpg')

  ];

  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
