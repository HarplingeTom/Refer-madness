import uuid from 'uuid';

export const addRecipe = ({ name = 'anonymous', ingredients = [] } = {}) => {
  const uid = uuid();
  const id = uid.slice(0, uid.indexOf('-'));

  return {
    type: 'ADD_RECIPE',
    recipe: {
      id,
      name,
      ingredients
    }
  }
};

export const removeRecipe = ({ id }) => ({
  type: 'REMOVE_RECIPE',
  id
});

export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});
