import "./Body.css"
import Board from "../BoardComponent/Board.jsx"
import Keyboard from "../KeyboardComponent/Keyboard.jsx"
import react from "react"
import Snackbar from "../SnackbarComponent/Snackbar.jsx"
import Gameover from "../GameoverComponent/Gameover.jsx"

function Body() {

    const [grid, setGrid] = react.useState([[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]])
    const [notPresent, setNotPresent] = react.useState([[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]])
    const [presentNoPosition, setPresentNoPosition] = react.useState([[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]])
    const [correctPosition, setCorrectPosition] = react.useState([[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]])
    const [boxActive, setBoxActive] = react.useState([0,0])
    const [gameover, setGameover] = react.useState([false, false])
    const [secretword, setSecretword] = react.useState("jsony")
    const [currentlyPlaying, setCurrentlyPlaying] = react.useState(true)

    const RANDOM_SECRET_WORD_API_ADDRESS = import.meta.env.PUBLIC_RANDOM_SECRET_WORD_API_ADDRESS

    react.useEffect(() => {
        fetch(RANDOM_SECRET_WORD_API_ADDRESS)
        .then((res) => res.json())
        .then((data) => {
            setSecretword(data["word"])
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    if(gameover[0]) {
        return (
            <main className="main">
                <Gameover winStatus={gameover[1]} correctWord={secretword} setGrid={setGrid} setNotPresent={setNotPresent} setPresentNoPosition={setPresentNoPosition} setCorrectPosition={setCorrectPosition} setBoxActive={setBoxActive} setGameover={setGameover} setSecretword={setSecretword} setCurrentlyPlaying={setCurrentlyPlaying} />
            </main>
        )
    } else {
        return (
            <main className="main">
                <Snackbar />
                <Board grid={grid} boxActive={boxActive} notPresent={notPresent} presentNoPosition={presentNoPosition} correctPosition={correctPosition} />
                <Keyboard secretword={secretword} setGameover={setGameover} boxActive={boxActive} grid={grid} setBoxActive={setBoxActive} setGrid={setGrid} notPresent={notPresent} presentNoPosition={presentNoPosition} correctPosition={correctPosition} setNotPresent={setNotPresent} setPresentNoPosition={setPresentNoPosition} setCorrectPosition={setCorrectPosition} />
            </main>
        )
    }
}

export default Body