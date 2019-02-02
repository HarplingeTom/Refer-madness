import React from 'react';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apples: 5,
      bananas: 3,
      cherries: 15
    };
  }

  render() {
    return <p>shopping list</p>;
  }
}

export default ShoppingList;
