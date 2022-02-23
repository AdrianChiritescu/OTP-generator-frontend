import "./OtpResult.css";
import {useContext, useState} from "react";
import OtpContext from "../context/OtpContext";

function OtpResult() {
    const { otp } = useContext(OtpContext);

    return (otp.length !== 0 ? (
        (
            otp.data === null ? 
            <p className="message">{otp.message}</p>
            :        
            <div>
                <p className="message">{otp.message}</p>
                <p className="generatedOtp">{otp.data && otp.data.otp}</p>
            </div>
        )
        ) : 
        (
            <p className="message"></p> // Not showing anything
        )
    );
}

export default OtpResult;
