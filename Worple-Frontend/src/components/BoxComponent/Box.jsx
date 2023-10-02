import "./Box.css"

function Box({value, currentlyActive, notPresent, presentNoPosition, correctPosition}) {

    var classString = "box"
    if(currentlyActive) {
        classString = classString +" is-active"
    }
    if(notPresent) {
        classString = classString +" not-present"
    }
    if(presentNoPosition) {
        classString = classString +" present-no-position"
    }
    if(correctPosition) {
        classString = classString +" correct-position"
    }

    return (
        <div className={classString}>
            <h3>
                {value.toUpperCase()}
            </h3>
        </div>
    )
}

export default Box