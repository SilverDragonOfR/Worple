import "./CorrectWord.css"

function CorrectWord({correctWord}) {

    return(
        <div className="correct-box">
            <div className="correct-exp">Correct word : </div>
            <div className="secretword">{correctWord.toUpperCase()}</div>
        </div>
    )
}

export default CorrectWord