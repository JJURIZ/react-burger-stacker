import Ingredient from './Ingredients'

function IngredientPane(props) {
    const availableIngredients = ['bun', 'meat', 'lettuce', 'cheese']

    const ingredientButtons = availableIngredients.map((ingredient, index) => {
        return (
        <Ingredient 
        name={ingredient} 
        key={`ingredient-${index}`} 
        addLayer={props.addLayer}
        />
     )
    })
    return(
        <div className="pane">
            {ingredientButtons}
        </div>
    )
}
export default IngredientPane;