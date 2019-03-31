import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] ;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private dataStorage : DataStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.dataStorage.getRecipes().subscribe(
      (recipesResp: Recipe[]) => {
        this.recipes=[recipesResp];
        this.recipeService.setRecipes(this.recipes);
      }
    );   
    

  }

  onNewRecipe(recipe : Recipe) {
    // this.router.navigate(['new'], {relativeTo: this.route});
    this.dataStorage.addRecipe(recipe);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
