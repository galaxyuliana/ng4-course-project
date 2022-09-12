import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Tecipe','This is simply a test','https://images.unsplash.com/photo-1549705324-4647bf959b5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'),
        new Recipe('Another Test Tecipe','This is simply a test','https://images.unsplash.com/photo-1549705324-4647bf959b5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
