import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Tecipe','This is simply a test','https://pixnio.com/free-images/2017/09/21/2017-09-21-06-54-28-550x310.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
