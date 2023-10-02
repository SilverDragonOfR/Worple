import "./Keyboard.css"
import Key from "../KeyComponent/Key.jsx"
import ReturnKey from "../ReturnKeyComponent/ReturnKey.jsx"
import EnterKey from "../EnterKeyComponent/EnterKey.jsx"

function Keyboard({secretword, setGameover, boxActive, grid, setBoxActive, setGrid, notPresent, presentNoPosition, correctPosition, setNotPresent, setPresentNoPosition, setCorrectPosition}) {

    // determine the colour of keys
    var colour = {
        "a": "honey dew","b": "honey dew","c": "honey dew", "d":"honey dew", "e":"honey dew",
        "f": "honey dew","g": "honey dew","h": "honey dew", "i":"honey dew", "j":"honey dew",
        "k": "honey dew","l": "honey dew","m": "honey dew", "n":"honey dew", "o":"honey dew",
        "p": "honey dew","q": "honey dew","r": "honey dew", "s":"honey dew", "t":"honey dew",
        "u": "honey dew","v": "honey dew","w": "honey dew", "x":"honey dew", "y":"honey dew", "z": "honey dew"
    }
    for (let i=0;i<6;i++) {
        for (let j=0;j<5;j++) {
            if (grid[i][j]==" ") {
                continue
            }
            if (notPresent[i][j]==true) {
                colour[grid[i][j]] = "dimgray"
            }
            if (presentNoPosition[i][j]==true) {
                if (colour[grid[i][j]] != "limegreen") {
                    colour[grid[i][j]] = "gold"
                }
            }
            if (correctPosition[i][j]==true) {
                colour[grid[i][j]] = "limegreen"
            }
        }
    }

    return(
        <div className="keyboard-outer">
            <div className="keyboard-inner">
                <div className="keyboard-row">
                    <Key colour={colour["q"]} value="q" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["w"]} value="w" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["e"]} value="e" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["r"]} value="r" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["t"]} value="t" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["y"]} value="y" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["u"]} value="u" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["i"]} value="i" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["o"]} value="o" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["p"]} value="p" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                </div>
                <div className="keyboard-row">
                    <Key colour={colour["a"]} value="a" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["s"]} value="s" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["d"]} value="d" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["f"]} value="f" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["g"]} value="g" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["h"]} value="h" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["j"]} value="j" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["k"]} value="k" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["l"]} value="l" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                </div>
                <div className="keyboard-row">
                    <EnterKey secretword={secretword} setGameover={setGameover} boxActive={boxActive} setBoxActive={setBoxActive} grid={grid} notPresent={notPresent} presentNoPosition={presentNoPosition} correctPosition={correctPosition} setNotPresent={setNotPresent} setPresentNoPosition={setPresentNoPosition} setCorrectPosition={setCorrectPosition}/>
                    <Key colour={colour["z"]} value="z" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["x"]} value="x" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["c"]} value="c" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["v"]} value="v" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["b"]} value="b" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["n"]} value="n" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <Key colour={colour["m"]} value="m" boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                    <ReturnKey boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid}/>
                </div>
            </div>
        </div>
    )
}

export default Keyboard