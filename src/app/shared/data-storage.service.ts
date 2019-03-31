import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://my-project-7dce7.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://my-project-7dce7.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes = <Recipe[]>response.json();
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      ;
  }

  addRecipe(recipe : Recipe) {
     this.http.post('https://my-project-7dce7.firebaseio.com/recipes.json', recipe);
  }

  updateRecipe(recipe : Recipe) {
    this.http.put('https://my-project-7dce7.firebaseio.com/recipes.json', recipe);
  }

 deleteRecipe(recipe : Recipe) {
  // this.http.delete('https://my-project-7dce7.firebaseio.com/recipes.json', recipe.id);
  }

}
