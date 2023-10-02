import "./ReturnKey.css"

function returnKeyClickHandler({boxActive, grid, setBoxActive, setGrid}) {
    
    if(boxActive[1]<=0) return

    var tmp = grid
    tmp[boxActive[0]][boxActive[1]-1] = " "
    setGrid(() => {
        return tmp
    })

    setBoxActive(() => {
        return [boxActive[0], boxActive[1]-1]
    })
}

function ReturnKey({boxActive, grid, setBoxActive, setGrid}) {

    return(
        <button className="returnkey" onClick={() => {returnKeyClickHandler({boxActive, grid, setBoxActive, setGrid})}}>
            <div className="returnletter">
                BACK
            </div>
        </button>
    )
}

export default ReturnKey