import "./NewGame.css"
import react from "react"


function NewGame({setGrid, setNotPresent, setPresentNoPosition, setCorrectPosition, setBoxActive, setGameover, setSecretword, setCurrentlyPlaying}) {

    const [tic, setTic] = react.useState(5)
    var time = ["00:00", "00:01", "00:02", "00:03", "00:04", "00:05"]

    if(tic>0) {
        setTimeout(() => {
            setTic(() => {
                return tic-1
            })
        }, 1000)
    }

    async function newGameClickHandler() {
        setGrid(() => {
            return [[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]]
        })
        setNotPresent(() => {
            return [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
        })
        setPresentNoPosition(() => {
            return [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
        })
        setCorrectPosition(() => {
            return [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
        })
        setBoxActive(() => {
            return [0,0]
        })
    
        const RANDOM_SECRET_WORD_API_ADDRESS = import.meta.env.PUBLIC_RANDOM_SECRET_WORD_API_ADDRESS

        await fetch(RANDOM_SECRET_WORD_API_ADDRESS)
        .then((res) => res.json())
        .then((data) => {
            setSecretword(data["word"])
        })
        .catch((err) => {
            console.log(err.message)
        })
        setGameover(() => {
            return false
        })
        setCurrentlyPlaying(() => {
            return true
        })
    }

    return (
        <div className="new-box">
            <div className={"newgame-timer"}>{tic==0 ? "Play" : time[tic]}</div>
            <div>
                <button disabled={tic!=0} className="newgame-btn" onClick={newGameClickHandler}>
                    Again ?
                </button>
            </div>
        </div>
    )
}

export default NewGame