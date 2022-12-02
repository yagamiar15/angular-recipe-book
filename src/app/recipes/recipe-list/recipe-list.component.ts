import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Una receta de prueba', 'Es una receta de prueba', 'https://www.clarin.com/img/2021/05/04/cAHcrweF1_1256x620__1.jpg'),
    new Recipe('Una receta mas', 'Es una receta mas para probar', 'https://www.clarin.com/img/2021/05/04/cAHcrweF1_1256x620__1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
