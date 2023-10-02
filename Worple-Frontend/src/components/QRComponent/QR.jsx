import "./QR.css"
import QRCode from 'react-qr-code';

function QR({linkText}) {

    return(
        <div className="qr-outer-box">
            <div className="qr-inner-box">
            <div id="qrcode">
                <QRCode
                    title="Scan to share"
                    value={linkText}
                    bgColor={"black"}
                    fgColor={"gold"}
                    size={180}
                />
            </div>
            </div>
        </div>
    )
}

export default QR