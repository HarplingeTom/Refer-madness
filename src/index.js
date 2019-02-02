import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RefrigeratorDashboard from './components/RefrigeratorDashboard';
import CreateRecipe from './components/CreateRecipe';
import ShowRecipes from './components/ShowRecipes';
import { addIngredient } from './actions/ingredients';
import { addRecipe } from './actions/recipes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const ingredients = [
  { name: 'Red Onion', onhand: 0, units: 'one_each' },
  { name: 'Green Bell Pepper', onhand: 0, units: 'one_each' },
  { name: 'Pineapple', onhand: 0, units: 'one_each' },
  { name: 'Roma Tomato', onhand: 0, units: 'one_each' },
  { name: 'Cilantro', onhand: 0, units: 'one_each' },
  { name: 'Lime', onhand: 0, units: 'one_each' },
  { name: 'Chicken', onhand: 0, units: 'oz' },
  { name: 'Southwest Spice Blend', onhand: 0, units: 'packet' },
  { name: 'Flour tortillas', onhand: 0, units: 'one_each' },
  { name: 'Mozzarella Cheese', onhand: 0, units: 'cups' },
  { name: 'Sour Cream', onhand: 0, units: 'oz' },
  { name: 'Shallot', onhand: 0, units: 'one_each' },
  { name: 'Rosemary', onhand: 0, units: 'oz' },
  { name: 'Yukon Gold Potatoes', onhand: 0, units: 'oz' },
  { name: 'Pork Tenderloin', onhand: 0, units: 'oz' },
  { name: 'Green Beans', onhand: 0, units: 'oz' },
  { name: 'Fig Jam', onhand: 0, units: 'tablespoons' },
  { name: 'Chicken Stock Concentrate', onhand: 0, units: 'can' },
  { name: 'Balsamic Vinegar', onhand: 0, units: 'teaspoons' }
];

ingredients.forEach((ingredient) => {
  store.dispatch(addIngredient(ingredient));
});

function getIngredientByName(name) {
  return store.getState().ingredients.find((ingredient) => {
    return ingredient.name === name;
  });
}

const CPQIngredients = [
  [ getIngredientByName('Red Onion'), 1 ],
  [ getIngredientByName('Green Bell Pepper'), 1 ],
  [ getIngredientByName('Pineapple'), 1 ],
  [ getIngredientByName('Roma Tomato'), 1 ],
  [ getIngredientByName('Cilantro'), 1 ],
  [ getIngredientByName('Lime'), 1 ],
  [ getIngredientByName('Chicken'), 1 ],
  [ getIngredientByName('Southwest Spice Blend'), 1 ],
  [ getIngredientByName('Flour tortillas'), 1 ],
  [ getIngredientByName('Mozzarella Cheese'), 1 ],
  [ getIngredientByName('Sour Cream'), 1 ]
];

store.dispatch(addRecipe({
  name: 'Chicken Pineapple Quesadillas',
  ingredients: CPQIngredients
}));

const FBPIngredients = [
  [ getIngredientByName('Shallot'), 1 ],
  [ getIngredientByName('Rosemary'), 1 ],
  [ getIngredientByName('Yukon Gold Potatoes'), 1 ],
  [ getIngredientByName('Pork Tenderloin'), 1 ],
  [ getIngredientByName('Green Beans'), 1 ],
  [ getIngredientByName('Fig Jam'), 1 ],
  [ getIngredientByName('Chicken Stock Concentrate'), 2 ],
  [ getIngredientByName('Balsamic Vinegar'), 1 ]
];

store.subscribe(() => {
  console.log('subscription', store.getState());
});

store.dispatch(addRecipe({
  name: 'Figgy Balsamic Pork',
  ingredients: FBPIngredients
}));

const routes = (
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ RefrigeratorDashboard } />
        <Route path="/createrecipe" component={ CreateRecipe } />
        <Route path="/showrecipes" component={ ShowRecipes } />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));
