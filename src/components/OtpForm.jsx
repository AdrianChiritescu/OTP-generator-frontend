import "./OtpForm.css";
import WithStylesButton from "./WithStylesButton";
import { TextField } from "@mui/material";
import BasicDateTimePicker from "./BasicDateTimePicker";
import { useState } from "react";
import { useContext } from "react";
import OtpContext from "../context/OtpContext";

function OtpForm() {
  const { generateOtp } = useContext(OtpContext);
  const [userId, setUserId] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);

    if (userId.trim() === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (userId.trim() !== "" && userId.trim().length < 3) {
      setMessage("User ID must be at least 4 characters.");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleDateTimeChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId.trim().length > 3) {
      const postData = {
        userId: userId,
        timestamp: new Date(),
        expiresIn: 0,
        otp: "",
      };

      generateOtp(postData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div>
          <TextField
            onChange={handleUserIdChange}
            label="User ID"
            variant="outlined"
            value={userId}
          />
          {message && <div className="message">{message}</div>}
        </div>
        <BasicDateTimePicker />

        <WithStylesButton
          type="submit"
          disabled={btnDisabled}
          variant="contained"
        >
          Generate new OTP
        </WithStylesButton>
      </div>
    </form>
  );
}

export default OtpForm;
