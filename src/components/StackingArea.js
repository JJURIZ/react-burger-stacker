
function StackingArea(props) {
    const layers = props.layers.map((l) => {
        return <div className={`ingredient ${l}`}/>
    })
    return(
        <div>
           {layers}
        </div>
    )
}
export default StackingArea;