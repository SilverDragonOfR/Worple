import CorrectWord from "../CorrectWordComponent/CorrectWord"
import NewGame from "../NewGameComponent/NewGame"
import QR from "../QRComponent/QR"
import WAShare from "../WAShareComponent/WAShare"
import "./Gameover.css"

function Gameover({winStatus, correctWord, setGrid, setNotPresent, setPresentNoPosition, setCorrectPosition, setBoxActive, setGameover, setSecretword, setCurrentlyPlaying}) {
    var linkText = "https://api.whatsapp.com/send?text="+"Play Worple at "+import.meta.env.PUBLIC_SITE_LINK

    return (
        <div className="gameover-box">
            <div className="gameover-header">
                <h1 className={"gameover-h1 "+(winStatus ? "green" : "red")}>You {winStatus ? "won" : "lost"}</h1>
            </div>
            <div className="gameover-desc">
                <div className="gameover-share">
                    <QR linkText={linkText} />
                    <WAShare linkText={linkText} />
                </div>
                <div className="gameover-next">
                    <CorrectWord correctWord={correctWord} />
                    <NewGame setGrid={setGrid} setNotPresent={setNotPresent} setPresentNoPosition={setPresentNoPosition} setCorrectPosition={setCorrectPosition} setBoxActive={setBoxActive} setGameover={setGameover} setSecretword={setSecretword} setCurrentlyPlaying={setCurrentlyPlaying} />
                </div>
            </div>
        </div>
    )
}

export default Gameover