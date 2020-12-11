
function Ingredient(props) {
    return(
        <div>
            {props.name}
            <button onClick={() => {props.addLayer(props.name)}}>
                Add
            </button>
        </div>
    )
}
export default Ingredient;