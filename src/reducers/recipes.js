const recipesReducerDefaultState = [];
export default (state = recipesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [ ...state, action.recipe ];
    default:
      return state;
  }
};
