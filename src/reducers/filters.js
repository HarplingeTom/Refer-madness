const ingredientFilterReducerDefaultState = {
  text: '',
  sortBy: 'category'
};
export default (state = ingredientFilterReducerDefaultState, action) => {
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
