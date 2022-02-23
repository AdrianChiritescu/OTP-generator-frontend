import "./OtpResult.css";
import {useContext} from "react";
import OtpContext from "../context/OtpContext";

function OtpResult() {
    const { otp } = useContext(OtpContext);
    const [isHidden, setIsHidden] = setState(true);

    return (
        <>
            <p isHidden="true" className="message">Generated password: {otp.data && otp.data.otp}</p>
        </>
    )
}

export default OtpResult;
