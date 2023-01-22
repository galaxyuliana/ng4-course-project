import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        return this.http.put('https://ng-course-recipe-book-129a9-default-rtdb.firebaseio.com/recipes.json', recipes)
                .subscribe(response => {
                    console.log(response);
                });
    }
}