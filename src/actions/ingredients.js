export const addIngredient = ({ name = 'anonymous', onhand = 0, units = '' } = {}) => {
  return {
    type: 'ADD_INGREDIENT',
    ingredient: { name, onhand, units }
  }
};

export const removeIngredient = ({ name }) => ({
  type: 'REMOVE_INGREDIENT',
  name
});

export const editIngredient = (name, updates) => ({
  type: 'EDIT_INGREDIENT',
  name,
  updates
});
