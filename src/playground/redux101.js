import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_INGREDIENT
const addIngredient = (
  {
    name = 'anonymous',
    description = 'no description',
    category = 'general'
  } = {}
) => ({
  type: 'ADD_INGREDIENT',
  ingredient: {
    id: uuid(),
    name,
    description,
    category
  }
});
// REMOVE_INGREDIENT
const removeIngredient = ({ id }) => ({
  type: 'REMOVE_INGREDIENT',
  id
});
// EDIT_INGREDIENT
const editIngredient = (id, updates) => ({
  type: 'EDIT_INGREDIENT',
  id,
  updates
});
// SET_INGREDIENTS_TEXT_FILTER
const setIngredientsTextFilter = (text) => ({
  type: 'SET_INGREDIENTS_TEXT_FILTER',
  text
});
// SORT_BY_NAME
const sortIngredientsByName = () => ({
  type: 'SORT_INGREDIENTS_BY_NAME'
});
// SORT_BY_CATEGORY
const sortIngredientsByCategory = () => ({
  type: 'SORT_INGREDIENTS_BY_CATEGORY'
});

const ingredientReducerDefaultState = [];
const ingredientReducer = (state = ingredientReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [ ...state, action.ingredient ];
    case 'REMOVE_INGREDIENT':
      return state.filter(ingredient => ingredient.id !== action.id);
    case 'EDIT_INGREDIENT':
      return state.map((ingredient) => {
        if (ingredient.id === action.id) {
          return { ...ingredient, ...action.updates };
        }
        return ingredient;
      });
    default:
      return state;
  }
};

const ingredientFilterReducerDefaultState = {
  text: '',
  sortBy: 'category'
};
const ingredientFilterReducer = (state = ingredientFilterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_INGREDIENTS_BY_NAME':
      return { ...state, sortBy: 'name' };
    case 'SORT_INGREDIENTS_BY_CATEGORY':
      return { ...state, sortBy: 'category' };
    case 'SET_INGREDIENTS_TEXT_FILTER':
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const recipesReducerDefaultState = [];
const recipesReducer = (state = recipesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const inventoryReducerDefaultState = [];
const inventoryReducer = (state = inventoryReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getVisibleIngredients = (ingredients, { text, sortBy }) => {
  return ingredients.filter((ingredient) => {
    // let textMatch;
    // textMatch = ingredient.description.includes(text)
    return ingredient.description.toLowerCase().includes(text.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name < b.name ? -1 : 1;
    } else if (sortBy === 'category') {
      return a.category < b.category ? -1 : 1;
    }
  });
};

const store = createStore(
  combineReducers({
    ingredients: ingredientReducer,
    ingredientFilter: ingredientFilterReducer,
    recipes: recipesReducer,
    inventory: inventoryReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleIngredients = getVisibleIngredients(state.ingredients, state.ingredientFilter);
  console.log(state);
  console.log(visibleIngredients);
});

const ingredientTwo = store.dispatch(addIngredient({ name: 'salt', description: 'hot sea salt', category: 'fruit' }));
const ingredientOne = store.dispatch(addIngredient({ name: 'pepper', description: 'red hot pepper', category: 'spice' }));
// store.dispatch(removeIngredient({ id: ingredientOne.ingredient.id }));
// store.dispatch(editIngredient(ingredientTwo.ingredient.id, { description: 'pigs' }));
// store.dispatch(setIngredientsTextFilter('sugar'));
// store.dispatch(sortIngredientsByCategory());
// store.dispatch(sortIngredientsByName());
// store.dispatch(setIngredientsTextFilter('ep'));
store.dispatch(sortIngredientsByName());
store.dispatch(sortIngredientsByCategory());

const ingredientState = {
  ingredients: [
    {
      id: uuid(),
      name: 'salt',
      description: 'sea salt',
      category: 'spice',
    }
  ],
  ingredientFilters: {
    text: 'sea',
    sortBy: 'name' // name or category
  }
};

const recipeState = {
  recipes: [
    {
      id: uuid(),
      description: 'apple pie',
      ingredients: [ 'apples', 'flour' ],
      category: 'dessert',
      notes: 'no notes'
    }
  ]
};

const inventoryState = {
  inventory: [
    {
      id: uuid(),
      ingredient: 'salt',
      amount: 5,
      units: 'ounces'
    }
  ]
};
