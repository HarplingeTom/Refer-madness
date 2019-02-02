const getVisibleIngredients = (ingredients, { text, sortBy }) => {
  if ((sortBy === 'name') || (sortBy === 'category')) {
    return ingredients.filter((ingredient) => {
      console.log(ingredient);
      return ingredient[ sortBy ].toLowerCase().includes(text.toLowerCase());
    }).sort((a, b) => {
      return a[ sortBy ] < b[ sortBy ] ? 1 : -1;
    });
  }
};

export default getVisibleIngredients;
