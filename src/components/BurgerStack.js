import { Component } from 'react'

class BurgerStack extends Component {


    render(){
        const burgerIngredients = this.props.burgerArray.map((ingredient, idx) => {
            return (
            <li key={idx}>{ingredient.name}</li>
            )
        })
        return(
            <div>
                <h1>Your Burger</h1>
                <ul>
                   {burgerIngredients}
                </ul>
                <br/>
                <button onClick={this.props.clearBurger}>Clear Burger</button>
            </div>
        )
    }
}

export default BurgerStack;