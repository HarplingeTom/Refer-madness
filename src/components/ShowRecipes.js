import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ShowRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: this.props.recipes[ 0 ],
      recipes: this.props.recipes,
      shoppingList: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleGotItClick = this.handleGotItClick.bind(this);
  }

  handleSelectChange(event) {
    const newSelection = this.state.recipes.find((recipe) => {
      return recipe.name === event.target.value;
    });
    this.setState({ currentRecipe: newSelection });
  }

  handleGotItClick(event) {
    event.target.textContent = (event.target.textContent !== 'Yes') ? 'Yes' : 'No';
  }

  render() {

    const recipeList = this.props.recipes.map((recipe) => {
      return <option key={ recipe.id } value={ recipe.name }>{ recipe.name }</option>
    });

    const ingredientsList = this.state.currentRecipe.ingredients.map((ingredient) => {
      return (
        <tr key={ ingredient[ 0 ].name }>
          <td>{ ingredient[ 0 ].name }</td>
          <td>{ ingredient[ 1 ] }</td>
          <td onClick={ this.handleGotItClick }>No</td>
        </tr>
      );
    });

    return (
      <div id='showRecipes'>
        <header>
          <Link to="/">Dashboard</Link>
          <label htmlFor="recipes">
            Choose a recipe:
          <select id="recipes" onChange={ this.handleSelectChange }>
              { recipeList }
            </select>
          </label>
          <h1>{ this.state.currentRecipe.name }</h1>
        </header>
        <main>
          <table id='recipeTable'>
            <caption>ingredients</caption>
            <thead>
              <tr><th scope="col">item</th><th scope="col">quantity</th><th scope="col">got it?</th></tr>
            </thead>
            <tbody>
              { ingredientsList }
            </tbody>
          </table>
          <table>
            <caption>shopping list</caption>
            <thead>
              <tr><th scope="col">item</th><th scope="col">quantity</th><th scope="col">got it?</th></tr>
            </thead>
            <tbody>
              { this.state.shoppingList }
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

const ConnectedShowRecipe = connect((state) => {
  return {
    recipes: state.recipes
  }
})(ShowRecipes);

export default ConnectedShowRecipe;
