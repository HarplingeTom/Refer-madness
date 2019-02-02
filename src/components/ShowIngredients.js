import React from 'react';
import { connect } from 'react-redux';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
  }

  makeEntries() {
    return this.props.ingredients.map((ingredient) => {
      const { id, name, description, category } = ingredient;
      return (
        <tr key={ id }>
          <td>{ name }</td>
          <td>{ description }</td>
          <td>{ category }</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <caption>Your universe of ingredients</caption>
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          { this.makeEntries() }
        </tbody>
      </table>
    )
  }
}

const ConnectedIngredients = connect((state) => {
  return {
    ingredients: state.ingredients
  }
})(Ingredients);

export default ConnectedIngredients;
