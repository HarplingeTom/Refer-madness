import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import uuid from 'uuid';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);

    console.log('CreateRecipe props', props);

    this.state = {
      name: '',
      ingredientsExisting: props.ingredients,
      ingredientsChosen: []
    }

    this.createRecipe = this.createRecipe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  createRecipe() {
    const action = addRecipe({ name: this.state.name, ingredients: this.state.ingredientsChosen });
    console.log(action);
    this.props.dispatch(action);
  }

  handleAddIngredient(event) {
    event.preventDefault();
    const uid = uuid();
    const id = uid.slice(0, uid.indexOf('-'));
    const ingredientName = event.target.elements.ingredientName.value;
    event.target.elements.ingredientName.value = '';
    const amount = event.target.elements.ingredientAmount.value;
    const newIngredients = [ ...this.state.ingredientsChosen, [ { id: id, name: ingredientName, onhand: 0, units: 'each' }, amount ] ];
    this.setState({ ingredientsChosen: newIngredients });
    console.log(this.state);
  }

  render() {
    return (
      <div id="createRecipe">
        <Link to="/">Dashboard</Link>
        <h1>Create Recipe</h1>
        <form onSubmit={ this.handleAddIngredient }>
          Recipe Name: <input type="text" name="recipeName" value={ this.state.name } onChange={ this.updateName } placeholder="recipe name" />
          <ul>
            <li>ingredient one</li>
            <li>ingredient two</li>
          </ul>
          Ingredient Name: <input type="text" name="ingredientName" placeholder="enter new ingredient" />
          <br />
          Amount: <input type="number" name="ingredientAmount" placeholder="enter amount needed" value={ 1 } disabled />
          <button>Add Ingredient</button>
        </form>
        <button type="button" onClick={ this.createRecipe } >Submit Recipe</button>
      </div>
    );
  }
}

const ConnectedCreateRecipe = connect((state) => {
  return {
    ingredients: state.ingredients
  }
})(CreateRecipe);

export default ConnectedCreateRecipe;
