import "./CountDown.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import OtpContext from "../context/OtpContext";

const defaultRemainingTime = 30;

function CountDown({ countDownTime }) {
  const { deleteOtp } = useContext(OtpContext);
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTime--);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTime]);

  const updateRemainingTime = (countDown) => {
    if (countDown <= 0) {
      setRemainingTime(0);
      deleteOtp();
      return;
    }

    setRemainingTime(countDown);
  };

  return (
    <p className="countDown">
      Expires in <span>{remainingTime}</span>
    </p>
  );
}

export default CountDown;
