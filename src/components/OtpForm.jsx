import "./OtpForm.css";
import WithStylesButton from "./WithStylesButton";
import { TextField } from "@mui/material";
import BasicTimePicker from "./BasicTimePicker";

function OtpForm() {
  return (
    <form>
        <div className="input-group">
            <TextField label="User ID" variant="outlined"/>
            <BasicTimePicker />
        </div>

        <div className="centered">
            <WithStylesButton variant="contained">Generate new OTP</WithStylesButton>
        </div>
    </form>
  )
}

export default OtpForm;
