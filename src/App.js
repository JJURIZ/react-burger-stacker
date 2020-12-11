import { Component } from "react";
import './App.css';
import './style.scss'
import Ingredients from './components/Ingredients';
import BurgerStack from './components/BurgerStack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { name: "Kaiser Bun", color: "saddlebrown" },
        { name: "Sesame Bun", color: "sandybrown" },
        { name: "Gluten Free Bun", color: "peru" },
        { name: "Lettuce Wrap", color: "olivedrab" },
        { name: "Beef Patty", color: "#3F250B" },
        { name: "Soy Patty", color: "#3F250B" },
        { name: "Black Bean Patty", color: "#3F250B" },
        { name: "Chicken Patty", color: "burlywood" },
        { name: "Lettuce", color: "lawngreen" },
        { name: "Tomato", color: "tomato" },
        { name: "Bacon", color: "maroon" },
        { name: "Onion", color: "lightyellow" },
      ],
      burgerArray: []
    };
    }

    handleBurgerIngredient = (ingredient) => {
      const newBurgerArray = [...this.state.burgerArray]
      newBurgerArray.push(ingredient)
      this.setState({burgerArray: newBurgerArray})
    }

    clearBurger = (e) => {
      this.setState({
          burgerArray: []
      })
  }

  render() {
  return (
    <div className="App">
      <div className="ingredients">
    <Ingredients 
    ingredients={this.state.ingredients} 
    handleBurgerIngredient={this.handleBurgerIngredient}
    />
      </div>
      <div className="burger_stack">
    <BurgerStack 
    clearBurger={this.clearBurger}
    burgerArray={this.state.burgerArray}
    />
      </div>
    </div>
  );
}
}

export default App;
