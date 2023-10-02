import "./EnterKey.css"

async function checkIfExistsWord(s) {

    const CHECK_WORD_API_ADDRESS = import.meta.env.PUBLIC_CHECK_WORD_API_ADDRESS+"/"+s

    var ret = false
    await fetch(CHECK_WORD_API_ADDRESS)
    .then((res) => res.json())
    .then((data) => {
        ret = data["isPresent"]
    })
    .catch((err) => {
        console.log(err.message)
    })
    return ret
}

function runSnackbar(text) {
    var elem = document.querySelector(".animation-div")
    elem.textContent = text
    elem.style.animation = "popInOutAnimation 2s linear 1";
    setTimeout(()=>{
        elem.style.animation="none";
    },2000);
}

async function enterKeyClickHandler({secretword, setGameover, boxActive, setBoxActive, grid, notPresent, presentNoPosition, correctPosition, setNotPresent, setPresentNoPosition, setCorrectPosition}) {

    if(boxActive[1]!=5) {
        runSnackbar("Not 5-lettered word !")
        return
    }
    const rowIndex = boxActive[0]
    const enteredWord = grid[rowIndex].join("")
    const searchFound = await checkIfExistsWord(enteredWord)
    
    if(!searchFound) {
        runSnackbar("Not a valid word !")
        return
    }

    var tmp1 = notPresent
    tmp1[rowIndex] = enteredWord.split("").map((ch) => {
        return !secretword.split("").includes(ch)
    })
    setNotPresent(() => {
        return tmp1
    })

    var tmp2 = presentNoPosition
    tmp2[rowIndex] = enteredWord.split("").map((ch, i) => {
        return secretword.split("").includes(ch) && ch!=secretword[i]
    })
    setPresentNoPosition(() => {
        return tmp2
    })

    var tmp3 = correctPosition
    tmp3[rowIndex] = enteredWord.split("").map((ch, i) => {
        return ch==secretword[i]
    })
    if(tmp3[rowIndex].every((v, i) => v === [true, true, true, true, true][i])) {
        setGameover([true, true])
        setBoxActive(() => {
            return [0, 0]
        })
        return
    }
    setCorrectPosition(() => {
        return tmp3
    })

    document.querySelectorAll(".box").forEach((ele, key) => {
        if(Math.floor(key/5) == rowIndex) {
            setTimeout(() => {
                ele.style.animation = "flipAnimation 0.5s linear 1";
            }, 0+(key%5)*300)
        }
    })
    setTimeout(()=>{
        document.querySelectorAll(".box").forEach((ele, key) => {
            if(Math.floor(key/5) == rowIndex) {
                ele.style.transform = "rotateY(0deg)";
                ele.style.animation = "none";
            }
        })
    },2000);

    if(boxActive[0]<5) {
        setBoxActive(() => {
            return [boxActive[0]+1, 0]
        })
    } else {
        if (tmp3[rowIndex].every((v, i) => v === [true, true, true, true, true][i])) {
            setGameover([true, true])
        } else {
            setGameover([true,false])
        }
        setBoxActive(() => {
            return [0, 0]
        })
    }
}

function EnterKey({secretword, setGameover, boxActive, setBoxActive, grid, notPresent, presentNoPosition, correctPosition, setNotPresent, setPresentNoPosition, setCorrectPosition}) {

    return(
        <button className="enterkey" onClick={() => {enterKeyClickHandler({secretword, setGameover, boxActive, setBoxActive, grid, notPresent, presentNoPosition, correctPosition, setNotPresent, setPresentNoPosition, setCorrectPosition})}}>
            <div className="enterletter">
                ENTER
            </div>
        </button>
    )
}

export default EnterKey