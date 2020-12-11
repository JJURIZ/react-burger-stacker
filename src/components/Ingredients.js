import { Component } from "react";

class Ingredients extends Component {
  render() {
    const listIngredients = this.props.ingredients.map((ingredient, idx) => (
      <div key={idx}>
        <li>
          {ingredient.name}
          <button onClick={() => this.props.handleBurgerIngredient(ingredient)}>
          &#8594;
          </button>
        </li>
      </div>
    ));

    return (
      <div>
        <h1>Choose Your Ingredients</h1>
        <ul>{listIngredients}</ul>
      </div>
    );
  }
}

export default Ingredients;
