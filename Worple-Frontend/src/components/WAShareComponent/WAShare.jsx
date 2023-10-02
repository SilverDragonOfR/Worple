import "./WAShare.css"

function WAShare({linkText}) {

    return(
        <div className="wa-box" href="">
            <div className="waexp">Scan or Click!</div>
            <div className="wadm">
                <a className="green" href={linkText} target="_blank"><i className="fa fa-whatsapp"></i></a>
            </div>
        </div>
    )
}

export default WAShare