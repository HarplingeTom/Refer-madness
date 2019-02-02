import { createStore, combineReducers } from 'redux';
import ingredientsReducer from '../reducers/ingredients';
import ingredientFilterReducer from '../reducers/filters';
import recipesReducer from '../reducers/recipes';

export default () => {
  const store = createStore(
    combineReducers({
      ingredients: ingredientsReducer,
      recipes: recipesReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
