import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RefrigeratorDashboard extends React.Component {
  recipeRows(recipe) {
    return (
      recipe.ingredients.map((item) => {
        const ingredient = item[ 0 ];
        const required = item[ 1 ];
        const warning = ingredient.onhand < required;
        return (
          <tr key={ ingredient.name }>
            <td>{ ingredient.name }</td>
            <td>{ ingredient.onhand }</td>
            <td>{ required }</td>
            { warning ? <td>{ required - ingredient.onhand }</td> : <td>ok</td> }
          </tr>
        );
      })
    );
  }

  render() {
    const ingredientRows = this.props.ingredients.map((obj) => {
      return (
        <tr key={ obj.name }>
          <td>{ obj.name }</td>
          <td>{ obj.onhand }</td>
          <td>{ obj.units }</td>
        </tr>
      );
    });

    const recipeTable = this.props.recipes.map((recipe) => {
      return (
        <div key={ recipe.name }>
          <table>
            <caption>{ recipe.name }</caption>
            <thead>
              <tr>
                <th scope="col">ingredient</th>
                <th scope="col">onhand</th>
                <th scope="col">required</th>
                <th scope="col">to buy</th>
              </tr>
            </thead>
            <tbody>
              { this.recipeRows(recipe) }
            </tbody>
          </table>
        </div>
      );
    })

    return (
      <div id='dashboard'>
        <h1>Refrigerator Dashboard</h1>
        <Link to="/createrecipe">Create Recipe</Link>
        <Link to="/showrecipes">Show Recipes</Link>
        <div id='dashboard-tables'>
          <table>
            <caption>Ingredients</caption>
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">onhand</th>
                <th scope="col">units</th>
              </tr>
            </thead>
            <tbody>{ ingredientRows }</tbody>
          </table>
          { recipeTable }
        </div>
      </div>
    );
  }
}

const ConnectedDashboard = connect((state) => {
  return {
    ingredients: state.ingredients,
    recipes: state.recipes
  }
})(RefrigeratorDashboard);

export default ConnectedDashboard;
