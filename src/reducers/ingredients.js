
const ingredientReducerDefaultState = [];

export default (state = ingredientReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [ ...state, action.ingredient ];
    case 'REMOVE_INGREDIENT':
      return state.filter(ingredient => ingredient.name !== action.name);
    case 'EDIT_INGREDIENT':
      return state.map((ingredient) => {
        if (ingredient.name === action.name) {
          return { ...ingredient, ...action.updates };
        }
        return ingredient;
      });
    default:
      return state;
  }
};
