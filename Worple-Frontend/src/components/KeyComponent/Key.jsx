import "./Key.css"

function keyClickHandler({value, boxActive, grid, setBoxActive, setGrid}) {

    if(boxActive[1]>=5) return

    var tmp = grid
    tmp[boxActive[0]][boxActive[1]] = value
    setGrid(() => {
        return tmp
    })

    setBoxActive(() => {
        return [boxActive[0], boxActive[1]+1]
    })
}

function Key({colour, value, boxActive, grid, setBoxActive, setGrid}) {

    var classNamestr = "key "+colour

    return(
        <button className={classNamestr} onClick={() => {keyClickHandler({value, boxActive, grid, setBoxActive, setGrid})}}>
            <div className="letter">
                {value.toUpperCase()}
            </div>
        </button>
    )
}

export default Key