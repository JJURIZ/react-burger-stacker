import { useState } from 'react';
import './App.css'
import BurgerPane from './components/BurgerPane';
import IngredientsPane from './components/IngredientPane';

function App(){
    const [layers, setLayers] = useState([])

    const addLayer = (layer) => {
        const newLayers = [layer, ...layers]
        setLayers(newLayers)
    }
const clear = () => {
    setLayers([])
}
return (
<div className="App">
    <IngredientsPane addLayer={addLayer}/>
    <BurgerPane layers={layers} clear={clear}/>
</div>
)
}

export default App;