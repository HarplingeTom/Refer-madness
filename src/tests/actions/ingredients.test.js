import { addIngredient, removeIngredient, editIngredient } from '../../actions/ingredients';

test('should set up remove ingredient action object', () => {
  const action = removeIngredient({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_INGREDIENT',
    id: '123abc'
  });
});

test('should set up edit ingredient action object', () => {
  const id = '123abc';
  const updates = {
    name: 'new name',
    description: 'new description',
    category: 'new category'
  };
  const action = editIngredient(id, updates);
  expect(action).toEqual({
      type: 'EDIT_INGREDIENT',
      id: '123abc',
      updates: {
      name: 'new name',
      description: 'new description',
      category: 'new category'
    }
  });
});

test('should set up add ingredient action object with provided values', () => {
  const ingredientData = {
    name: 'rutabaga',
    description: 'unknown food stuff',
    category: 'vegetable'
  };
  const action = addIngredient(ingredientData);
  expect(action).toEqual({
    type: 'ADD_INGREDIENT',
    ingredient: {
      id: expect.any(String),
      name: 'rutabaga',
      description: 'unknown food stuff',
      category: 'vegetable'
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addIngredient();
  expect(action).toEqual({
    type: 'ADD_INGREDIENT',
    ingredient: {
      id: expect.any(String),
      name: 'anonymous',
      description: 'no description',
      category: 'general'
    }
  });
});
